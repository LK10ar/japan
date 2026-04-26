// --- server.js ---
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Pour hacher les mots de passe
const jwt = require('jsonwebtoken'); // Pour créer les badges de session

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 1. CONNEXION À MONGODB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ Connecté à MongoDB Atlas !"))
.catch(err => console.error("❌ Erreur de connexion MongoDB :", err));

// 2. CRÉATION DU MODÈLE UTILISATEUR (avec mot de passe et roadtrip intégré)
const EtapeSchema = new mongoose.Schema({
    nom: String,
    lat: Number,
    lng: Number,
    type: String,
    statut: String
});

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Le mot de passe sera haché
    etapes: [EtapeSchema] // L'itinéraire est maintenant stocké DIRECTEMENT dans l'utilisateur
});

const User = mongoose.model('User', UserSchema);

// 3. MIDDLEWARE DE SÉCURITÉ (Le Vigile)
// Cette fonction vérifie si l'utilisateur a un badge (token) valide avant de le laisser passer
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Accès refusé. Tu dois être connecté.');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified; // On ajoute les infos de l'utilisateur à la requête
        next(); // Le badge est bon, on le laisse passer à la suite
    } catch (err) {
        res.status(400).send('Badge de connexion invalide ou expiré.');
    }
};

// 4. ROUTES D'AUTHENTIFICATION

// Inscription (Créer un compte)
app.post('/api/register', async (req, res) => {
    try {
        // 1. Vérifier si l'utilisateur existe déjà
        const userExists = await User.findOne({ username: req.body.username });
        if (userExists) return res.status(400).send("Ce pseudo est déjà pris.");

        // 2. Hacher le mot de passe (Sécurité niveau Pro)
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // 3. Créer le nouvel utilisateur
        const user = new User({
            username: req.body.username,
            password: hashedPassword
        });

        await user.save();
        res.send({ message: "Compte créé avec succès ! Tu peux maintenant te connecter." });

    } catch (err) {
        console.error("Erreur Inscription:", err);
        res.status(500).send("Erreur lors de la création du compte.");
    }
});

// Connexion
app.post('/api/login', async (req, res) => {
    try {
        // 1. Vérifier si l'utilisateur existe
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(400).send('Utilisateur non trouvé.');

        // 2. Vérifier si le mot de passe correspond au mot de passe haché
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass) return res.status(400).send('Mot de passe incorrect.');

        // Vérification de sécurité CRITIQUE pour Render
        if (!process.env.TOKEN_SECRET) {
            console.error("🚨 ERREUR CRITIQUE: TOKEN_SECRET n'est pas défini sur Render !");
            return res.status(500).send("Le serveur n'est pas correctement configuré (Clé secrète manquante).");
        }

        // 3. Créer et assigner le Token (le badge)
        const token = jwt.sign({ _id: user._id, username: user.username }, process.env.TOKEN_SECRET, { expiresIn: '24h' }); // Le token expire après 24h
        
        // On renvoie le token et le nom d'utilisateur au Frontend
        res.header('auth-token', token).send({ token: token, username: user.username });

    } catch (error) {
        console.error("Erreur Connexion:", error);
        res.status(500).send("Erreur lors de la connexion.");
    }
});

// 5. ROUTES DU ROADTRIP (PROTÉGÉES PAR LE VIGILE)

// Récupérer son roadtrip
app.get('/api/roadtrip', verifyToken, async (req, res) => {
    try {
        // Le vigile (verifyToken) a vérifié qui est l'utilisateur (req.user)
        const user = await User.findById(req.user._id);
        if (!user) return res.status(404).send('Utilisateur introuvable.');
        
        res.json(user.etapes);
    } catch (error) {
        console.error("Erreur GET Roadtrip:", error);
        res.status(500).send("Erreur serveur.");
    }
});

// Sauvegarder son roadtrip
app.post('/api/roadtrip', verifyToken, async (req, res) => {
    try {
        // On met à jour l'utilisateur avec ses nouvelles étapes
        await User.updateOne(
            { _id: req.user._id },
            { $set: { etapes: req.body.etapes } }
        );
        res.send({ message: 'Roadtrip sauvegardé avec succès !' });
    } catch (error) {
        console.error("Erreur POST Roadtrip:", error);
        res.status(500).send("Erreur serveur.");
    }
});

app.listen(port, () => {
    console.log(`🚀 Serveur en ligne sur le port ${port}`);
});
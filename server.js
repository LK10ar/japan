// --- server.js ---
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Pour le hachage
const jwt = require('jsonwebtoken'); // Pour la session

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

// 1. MODÈLE UTILISATEUR
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    etapes: [] // Le roadtrip est stocké directement dans l'utilisateur
});
const User = mongoose.model('User', UserSchema);

// 2. MIDDLEWARE DE VÉRIFICATION (Sécurité)
// Pour vérifier si l'utilisateur a le droit d'accéder à ses données
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Accès refusé');
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Token invalide');
    }
};

// 3. ROUTES AUTHENTIFICATION

// Inscription
app.post('/api/register', async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        username: req.body.username,
        password: hashedPassword
    });

    try {
        await user.save();
        res.send({ message: "Compte créé ! Connecte-toi." });
    } catch (err) {
        res.status(400).send("Ce pseudo existe déjà.");
    }
});

// Connexion
app.post('/api/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send('Utilisateur non trouvé');

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Mot de passe incorrect');

    // Créer le token (le badge de session)
    const token = jwt.sign({ _id: user._id, name: user.username }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send({ token: token, username: user.username });
});

// 4. ROUTES ROADTRIP (SÉCURISÉES)

app.get('/api/roadtrip', verifyToken, async (req, res) => {
    const user = await User.findById(req.user._id);
    res.json(user.etapes);
});

app.post('/api/roadtrip', verifyToken, async (req, res) => {
    await User.updateOne({ _id: req.user._id }, { etapes: req.body.etapes });
    res.send('Roadtrip sauvegardé !');
});

app.listen(process.env.PORT || 3000);

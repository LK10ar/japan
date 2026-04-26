// --- server.js ---
require('dotenv').config(); // Pour lire le fichier .env
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 1. CONNEXION À MONGODB
// L'adresse de ta base de données sera stockée dans une variable secrète (MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ Connecté à la base de données MongoDB Atlas !"))
.catch(err => console.error("❌ Erreur de connexion MongoDB :", err));

// 2. CRÉATION DU MODÈLE DE DONNÉES (Le schéma)
// On explique à MongoDB à quoi ressemble une "étape" de ton roadtrip
const EtapeSchema = new mongoose.Schema({
    nom: String,
    lat: Number,
    lng: Number,
    type: String,
    statut: String
});

// On crée le modèle "Itineraire" qui contiendra un tableau de ces étapes
const ItineraireSchema = new mongoose.Schema({
    userId: { type: String, default: "utilisateur_unique" }, // Pour plus tard, si tu as des comptes utilisateurs
    etapes: [EtapeSchema]
});

const Itineraire = mongoose.model('Itineraire', ItineraireSchema);

// 3. LES ROUTES API (Pour discuter avec ton frontend)

// Route GET : Récupérer le roadtrip sauvegardé
app.get('/api/roadtrip', async (req, res) => {
    try {
        // On cherche l'itinéraire de notre utilisateur (pour l'instant, on n'en a qu'un)
        const monItineraire = await Itineraire.findOne({ userId: "utilisateur_unique" });
        
        if (monItineraire) {
            res.json(monItineraire.etapes);
        } else {
            res.json([]); // Si rien n'est trouvé, on renvoie un tableau vide
        }
    } catch (error) {
        console.error("Erreur GET:", error);
        res.status(500).send("Erreur lors de la récupération des données.");
    }
});

// Route POST : Sauvegarder (ou mettre à jour) le roadtrip
app.post('/api/roadtrip', async (req, res) => {
    try {
        const nouvellesEtapes = req.body;

        // On cherche si un itinéraire existe déjà
        let monItineraire = await Itineraire.findOne({ userId: "utilisateur_unique" });

        if (monItineraire) {
            // S'il existe, on remplace les anciennes étapes par les nouvelles
            monItineraire.etapes = nouvellesEtapes;
            await monItineraire.save();
        } else {
            // S'il n'existe pas, on le crée
            monItineraire = new Itineraire({
                userId: "utilisateur_unique",
                etapes: nouvellesEtapes
            });
            await monItineraire.save();
        }

        res.json({ message: 'Roadtrip sauvegardé dans MongoDB avec succès !' });
    } catch (error) {
        console.error("Erreur POST:", error);
        res.status(500).send("Erreur lors de la sauvegarde des données.");
    }
});

// Lancement du serveur
app.listen(port, () => {
    console.log(`🚀 Serveur en ligne sur le port ${port}`);
});
// --- server.js ---
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '2mb' }));

// 1. CONNEXION À MONGODB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connecté à MongoDB Atlas !"))
  .catch(err => console.error("❌ Erreur de connexion MongoDB :", err));

// 2. SCHEMAS

const EtapeSchema = new mongoose.Schema({
  nom: String,
  lat: Number,
  lng: Number,
  type: String,
  statut: String
});

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatarUrl: { type: String, default: "" },
  favorisLieux: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lieu' }],
  favorisBonsPlans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BonPlan' }],
  etapes: [EtapeSchema],
  budget: {
    total: { type: Number, default: 0 },
    depenses: [{ nom: String, cout: Number }]
  },
  createdAt: { type: Date, default: Date.now }
});

// strict: false => tous les champs envoyés par admin_guide.html (blocs, p_trans, s_nom, c1/c2/c3, galerie, meteo...)
// sont sauvegardés tels quels, sans avoir à les redéclarer un par un ici.
const LieuSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  categorie: { type: String, required: true },
  titre: { type: String, required: true },
  sousTitre: String,
  desc: String,
  img: String,
  lat: Number,
  lng: Number,
  auteur: String,
  createdAt: { type: Date, default: Date.now }
}, { strict: false });

const BonPlanSchema = new mongoose.Schema({
  type: { type: String, required: true },
  titre: { type: String, required: true },
  description: String,
  lien: String,
  prix: String,
  dateDebut: String,
  dateFin: String,
  auteur: String,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);
const Lieu = mongoose.model('Lieu', LieuSchema);
const BonPlan = mongoose.model('BonPlan', BonPlanSchema);

// 3. MIDDLEWARE DE SÉCURITÉ
const verifyToken = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Accès refusé. Tu dois être connecté.');
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Badge de connexion invalide ou expiré.');
  }
};

// Seul le compte admin (toi) peut créer/modifier/supprimer du contenu (lieux, bons plans).
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'lk10';
const verifyAdmin = (req, res, next) => {
  if (req.user.username !== ADMIN_USERNAME) {
    return res.status(403).send("Seul le compte administrateur peut faire ça.");
  }
  next();
};

// 4. AUTHENTIFICATION

app.post('/api/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password || password.length < 4) {
      return res.status(400).send("Pseudo et mot de passe (4 caractères min) requis.");
    }
    const userExists = await User.findOne({ username });
    if (userExists) return res.status(400).send("Ce pseudo est déjà pris.");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.send({ message: "Compte créé avec succès ! Tu peux maintenant te connecter." });
  } catch (err) {
    console.error("Erreur Inscription:", err);
    res.status(500).send("Erreur lors de la création du compte.");
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send('Utilisateur non trouvé.');

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Mot de passe incorrect.');

    if (!process.env.TOKEN_SECRET) {
      console.error("🚨 TOKEN_SECRET n'est pas défini sur Render !");
      return res.status(500).send("Le serveur n'est pas correctement configuré.");
    }

    const token = jwt.sign({ _id: user._id, username: user.username }, process.env.TOKEN_SECRET, { expiresIn: '30d' });
    res.header('auth-token', token).send({ token, username: user.username, avatarUrl: user.avatarUrl || "" });
  } catch (error) {
    console.error("Erreur Connexion:", error);
    res.status(500).send("Erreur lors de la connexion.");
  }
});

// 5. PROFIL

app.get('/api/profile', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password').populate('favorisLieux').populate('favorisBonsPlans');
    if (!user) return res.status(404).send('Utilisateur introuvable.');
    res.json(user);
  } catch (err) {
    res.status(500).send("Erreur serveur.");
  }
});

app.put('/api/profile', verifyToken, async (req, res) => {
  try {
    const { avatarUrl } = req.body;
    await User.updateOne({ _id: req.user._id }, { $set: { avatarUrl: avatarUrl || "" } });
    res.send({ message: "Profil mis à jour." });
  } catch (err) {
    res.status(500).send("Erreur serveur.");
  }
});

// 6. FAVORIS (lieux et bons plans)

app.post('/api/favoris/lieu/:id', verifyToken, async (req, res) => {
  try {
    await User.updateOne({ _id: req.user._id }, { $addToSet: { favorisLieux: req.params.id } });
    res.send({ message: "Ajouté aux favoris." });
  } catch (err) { res.status(500).send("Erreur serveur."); }
});

app.delete('/api/favoris/lieu/:id', verifyToken, async (req, res) => {
  try {
    await User.updateOne({ _id: req.user._id }, { $pull: { favorisLieux: req.params.id } });
    res.send({ message: "Retiré des favoris." });
  } catch (err) { res.status(500).send("Erreur serveur."); }
});

app.post('/api/favoris/bonplan/:id', verifyToken, async (req, res) => {
  try {
    await User.updateOne({ _id: req.user._id }, { $addToSet: { favorisBonsPlans: req.params.id } });
    res.send({ message: "Ajouté aux favoris." });
  } catch (err) { res.status(500).send("Erreur serveur."); }
});

app.delete('/api/favoris/bonplan/:id', verifyToken, async (req, res) => {
  try {
    await User.updateOne({ _id: req.user._id }, { $pull: { favorisBonsPlans: req.params.id } });
    res.send({ message: "Retiré des favoris." });
  } catch (err) { res.status(500).send("Erreur serveur."); }
});

// 7. LIEUX (Guide Culturel) — lecture publique, écriture connectée

app.get('/api/lieux', async (req, res) => {
  try {
    const filtre = req.query.categorie ? { categorie: req.query.categorie } : {};
    const lieux = await Lieu.find(filtre).sort({ createdAt: -1 });
    res.json(lieux);
  } catch (err) { res.status(500).send("Erreur serveur."); }
});

app.get('/api/lieux/:id', async (req, res) => {
  try {
    const lieu = await Lieu.findOne({ id: req.params.id });
    if (!lieu) return res.status(404).send("Lieu introuvable.");
    res.json(lieu);
  } catch (err) { res.status(500).send("Erreur serveur."); }
});

app.post('/api/lieux', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const existe = await Lieu.findOne({ id: req.body.id });
    if (existe) return res.status(400).send("Cet identifiant de lieu existe déjà.");
    const lieu = new Lieu({ ...req.body, auteur: req.user.username });
    await lieu.save();
    res.send({ message: "Lieu ajouté !", lieu });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur lors de l'ajout du lieu.");
  }
});

app.put('/api/lieux/:id', verifyToken, verifyAdmin, async (req, res) => {
  try {
    await Lieu.updateOne({ id: req.params.id }, { $set: req.body });
    res.send({ message: "Lieu mis à jour." });
  } catch (err) { res.status(500).send("Erreur serveur."); }
});

app.delete('/api/lieux/:id', verifyToken, verifyAdmin, async (req, res) => {
  try {
    await Lieu.deleteOne({ id: req.params.id });
    res.send({ message: "Lieu supprimé." });
  } catch (err) { res.status(500).send("Erreur serveur."); }
});

// 8. BONS PLANS (Bons Plans & Transports)

app.get('/api/bonsplans', async (req, res) => {
  try {
    const filtre = req.query.type ? { type: req.query.type } : {};
    const plans = await BonPlan.find(filtre).sort({ createdAt: -1 });
    res.json(plans);
  } catch (err) { res.status(500).send("Erreur serveur."); }
});

app.post('/api/bonsplans', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const plan = new BonPlan({ ...req.body, auteur: req.user.username });
    await plan.save();
    res.send({ message: "Bon plan ajouté !", plan });
  } catch (err) { res.status(500).send("Erreur lors de l'ajout."); }
});

app.delete('/api/bonsplans/:id', verifyToken, verifyAdmin, async (req, res) => {
  try {
    await BonPlan.deleteOne({ _id: req.params.id });
    res.send({ message: "Bon plan supprimé." });
  } catch (err) { res.status(500).send("Erreur serveur."); }
});

// 9. ROADTRIP

app.get('/api/roadtrip', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).send('Utilisateur introuvable.');
    res.json(user.etapes);
  } catch (error) { res.status(500).send("Erreur serveur."); }
});

app.post('/api/roadtrip', verifyToken, async (req, res) => {
  try {
    await User.updateOne({ _id: req.user._id }, { $set: { etapes: req.body.etapes } });
    res.send({ message: 'Roadtrip sauvegardé avec succès !' });
  } catch (error) { res.status(500).send("Erreur serveur."); }
});

// 10. BUDGET

app.get('/api/budget', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const budget = user.budget || { total: 0, depenses: [] };
    res.json({ budgetTotal: budget.total || 0, depenses: budget.depenses || [] });
  } catch (err) { res.status(500).send("Erreur serveur."); }
});

app.post('/api/budget', verifyToken, async (req, res) => {
  try {
    const { budgetTotal, depenses } = req.body;
    await User.updateOne({ _id: req.user._id }, { $set: { budget: { total: budgetTotal, depenses: depenses || [] } } });
    res.send({ message: "Budget sauvegardé." });
  } catch (err) { res.status(500).send("Erreur serveur."); }
});

// 11. SANTÉ (pour Render)
app.get('/api/health', (req, res) => res.send({ status: "ok" }));

app.listen(port, () => {
  console.log(`🚀 Serveur en ligne sur le port ${port}`);
});

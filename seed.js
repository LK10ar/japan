// --- seed.js ---
// À lancer UNE SEULE FOIS, en local, pour importer tes lieux existants (data.js) dans MongoDB.
// Commande : node seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');

const LieuSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  categorie: String,
  titre: String,
  sousTitre: String,
  desc: String,
  descLongue: String,
  img: String,
  lat: Number,
  lng: Number,
  auteur: String,
  createdAt: { type: Date, default: Date.now }
}, { strict: false }); // strict:false = garde aussi blocs, galerie, p_trans, s_prix... (sinon ils sont supprimés)
const Lieu = mongoose.model('Lieu', LieuSchema);

// On charge data.js (qui définit `const baseArticles = [...]`) en isolant le tableau.
const contenu = fs.readFileSync('./data.js', 'utf8');
const match = contenu.match(/const baseArticles\s*=\s*(\[[\s\S]*?\]);/);
if (!match) {
  console.error("❌ Impossible de trouver 'baseArticles' dans data.js");
  process.exit(1);
}
const baseArticles = eval(match[1]); // fichier local et de confiance uniquement
const nouvellesEntrees = require('./nouvelles-entrees.js');
const nouvellesEntrees2 = require('./nouvelles-entrees-2.js');
const nouvellesEntrees3 = require('./nouvelles-entrees-3.js');
const nouvellesEntrees4 = require('./nouvelles-entrees-4.js');
const nouvellesEntrees5 = require('./nouvelles-entrees-5.js');
const toutesLesEntrees = [...baseArticles, ...nouvellesEntrees, ...nouvellesEntrees2, ...nouvellesEntrees3, ...nouvellesEntrees4, ...nouvellesEntrees5];

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connecté à MongoDB, import en cours...");

  let ajoutes = 0, ignores = 0;
  for (const art of toutesLesEntrees) {
    const existe = await Lieu.findOne({ id: art.id });
    if (existe) { ignores++; continue; }
    await Lieu.create({ ...art, auteur: "seed" }); // on garde TOUS les champs (blocs, galerie, p_trans, s_prix...)
    ajoutes++;
  }
  console.log(`✅ Terminé : ${ajoutes} lieux ajoutés, ${ignores} déjà existants.`);
  process.exit(0);
}

run().catch(err => { console.error(err); process.exit(1); });

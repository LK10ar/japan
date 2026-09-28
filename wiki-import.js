// --- wiki-import.js ---
// Remplit le guide automatiquement à partir de Wikipédia FR (texte sous licence CC BY-SA 4.0)
// et de Wikimedia Commons (photos libres). L'attribution est ajoutée automatiquement en bas de chaque fiche.
//
// Utilisation (depuis le dossier back-japan, avec ton .env) :
//   node wiki-import.js --dry --only=senso-ji      -> test sans rien écrire (aperçu dans ./wiki-preview/)
//   node wiki-import.js --dry                      -> aperçu de tout
//   node wiki-import.js                            -> importe TOUT dans MongoDB (remplace les fiches du même id)
//   node wiki-import.js --only=senso-ji,todaiji    -> seulement certaines fiches
//
// Les fiches existantes du même id sont REMPLACÉES (titre, texte, photos, carte).
// Les champs que tu as remplis à la main (p_evt, s_horaire, c1/c2/c3...) ne sont jamais écrasés.

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const args = process.argv.slice(2);
const DRY = args.includes('--dry');
const ONLY = ((args.find(a => a.startsWith('--only=')) || '').replace('--only=', '')).split(',').filter(Boolean);

const HEADERS = { 'User-Agent': 'JapanAndFriends/1.0 (site perso educatif; https://lk10ar.github.io/japan-and-friends)' };
const pause = ms => new Promise(r => setTimeout(r, ms));

// [id, catégorie, titre de l'article Wikipédia FR, titre affiché, sous-titre]
// (si le titre exact n'existe pas, le script prend le meilleur résultat de recherche et te le signale)
const LISTE = [
  // ---- Religion : temples et sanctuaires ----
  ['senso-ji', 'religion', 'Sensō-ji', 'Senso-ji', 'Le plus ancien temple de Tokyo'],
  ['meiji-jingu', 'religion', 'Meiji-jingū', 'Meiji Jingu', 'Le sanctuaire au cœur de la forêt de Tokyo'],
  ['todaiji', 'religion', 'Tōdai-ji', 'Todai-ji', 'Le temple au Grand Bouddha de Nara'],
  ['ise-jingu', 'religion', 'Ise-jingū', 'Ise', 'La ville berceau du shinto au Japon'],
  ['izumo-taisha', 'religion', 'Izumo-taisha', "Sanctuaire d'Izumo Taisha", 'Le plus ancien sanctuaire shinto'],
  ['koyasan', 'religion', 'Mont Kōya', 'Mont Koya', 'Le centre du bouddhisme Shingon'],
  ['hakone-jinja', 'religion', 'Hakone-jinja', 'Hakone-jinja', 'Le grand sanctuaire entre forêt et lac Ashi'],
  ['itsukushima', 'religion', 'Itsukushima-jinja', 'Itsukushima', 'Le torii flottant de Miyajima'],
  ['kiyomizu-dera', 'religion', 'Kiyomizu-dera', 'Kiyomizu-dera', 'Le temple sur pilotis de Kyoto'],
  ['nikko-toshogu', 'religion', 'Nikkō Tōshō-gū', 'Nikko Toshogu', 'Le mausolée doré de Tokugawa Ieyasu'],
  ['kotoku-in', 'religion', 'Kōtoku-in', 'Grand Bouddha de Kamakura', 'Le Daibutsu de Kamakura'],
  ['Nokogiri', 'religion', 'Nokogiri-yama', 'Mont Nokogiri', 'Balade bouddhique magique à Chiba'],
  ['ryoan-ji', 'religion', 'Ryōan-ji', 'Ryoan-ji', 'Le jardin de pierres zen de Kyoto'],
  ['horyu-ji', 'religion', 'Hōryū-ji', 'Horyu-ji', 'Le plus ancien édifice en bois du monde'],
  ['byodo-in', 'religion', 'Byōdō-in', 'Byodo-in', "Le pavillon du Phénix d'Uji"],
  ['kasuga-taisha', 'religion', 'Kasuga-taisha', 'Kasuga-taisha', 'Le sanctuaire aux mille lanternes de Nara'],
  ['tsurugaoka', 'religion', 'Tsurugaoka Hachiman-gū', 'Tsurugaoka Hachimangu', 'Le sanctuaire des samouraïs de Kamakura'],
  ['shintoisme-intro', 'religion', 'Shintoïsme', 'Comprendre le Shinto', 'La religion animiste native du Japon'],
  ['bouddhisme-japon', 'religion', 'Bouddhisme japonais', 'Le bouddhisme au Japon', 'Arrivé de Corée au VIe siècle'],
  ['pelerinage-shikoku', 'religion', 'Pèlerinage de Shikoku', 'Le pèlerinage des 88 temples de Shikoku', 'Sur les pas du moine Kukai'],
  ['obon-festival', 'religion', 'Obon', 'Obon', 'La fête bouddhiste des ancêtres'],
  ['setsubun-fete', 'religion', 'Setsubun', 'Setsubun', 'La fête qui chasse les démons avec des haricots'],
  ['daruma-poupee', 'religion', 'Daruma', 'Le Daruma', 'La poupée porte-bonheur aux yeux vides'],
  ['sept-divinites-bonheur', 'religion', 'Shichifukujin', 'Les Sept Divinités du Bonheur', 'Shichifukujin, les portes-bonheur populaires'],
  ['goshuin-collection', 'religion', 'Goshuin', 'Le Goshuin', 'Le carnet de sceaux des temples et sanctuaires'],
  ['juunishi-zodiaque', 'religion', 'Zodiaque chinois', 'Le Juunishi', 'Le zodiaque adopté par le Japon'],

  // ---- Histoire : châteaux, lieux, périodes ----
  ['chateau-osaka', 'histoire', "Château d'Osaka", "Château d'Osaka", 'La forteresse dorée de Toyotomi Hideyoshi'],
  ['chateau-himeji', 'histoire', 'Château de Himeji', 'Château de Himeji', 'Le célèbre château du héron blanc'],
  ['kumamoto-jo', 'histoire', 'Château de Kumamoto', 'Château de Kumamoto', 'Une forteresse aux murs de pierre incurvés'],
  ['chateau-matsumoto', 'histoire', 'Château de Matsumoto', 'Château de Matsumoto', 'Le château noir des Alpes japonaises'],
  ['chateau-nagoya', 'histoire', 'Château de Nagoya', 'Château de Nagoya', 'La forteresse aux dauphins dorés'],
  ['chateau-nijo', 'histoire', 'Château de Nijō', 'Château de Nijo', 'La résidence des shoguns à Kyoto'],
  ['chateau-hikone', 'histoire', 'Château de Hikone', 'Château de Hikone', 'Un donjon d\'origine sur les rives du lac Biwa'],
  ['chateau-matsue', 'histoire', 'Château de Matsue', 'Château de Matsue', 'Un des douze donjons originaux du Japon'],
  ['chateau-shuri', 'histoire', 'Château de Shuri', 'Château de Shuri', 'Le palais des rois de Ryukyu à Okinawa'],
  ['kinkakuji', 'histoire', 'Kinkaku-ji', "Le Pavillon d'Or (Kinkaku-ji)", 'Le temple recouvert d\'or de Kyoto'],
  ['ginkaku-ji', 'histoire', 'Ginkaku-ji', "Le Pavillon d'Argent (Ginkaku-ji)", 'Le temple zen de la colline Higashiyama'],
  ['fushimi-inari', 'histoire', 'Fushimi Inari-taisha', 'Fushimi Inari-taisha', 'Les milliers de torii rouges'],
  ['hiroshima-memorial', 'histoire', "Mémorial de la paix d'Hiroshima", "Mémorial de la paix d'Hiroshima", 'Le dôme de Genbaku'],
  ['shirakawa-go', 'histoire', 'Shirakawa-gō', 'Shirakawa-go', 'Le village aux maisons en chaume'],
  ['nakasendo', 'histoire', 'Nakasendō', 'Randonnée Nakasendo', "L'ancienne route Edo"],
  ['histoire-kyoto', 'histoire', 'Kyoto', "L'histoire de Kyoto", 'Mille ans de capitale impériale'],
  ['periode-jomon', 'histoire', 'Période Jōmon', 'La période Jomon', 'Chasseurs-cueilleurs et poteries'],
  ['periode-yayoi', 'histoire', 'Période Yayoi', 'La période Yayoi', 'La riziculture arrive au Japon'],
  ['periode-asuka-nara', 'histoire', 'Période de Nara', 'Périodes Asuka et Nara', 'Les premières capitales'],
  ['periode-heian', 'histoire', 'Période Heian', 'La période Heian', "L'âge d'or de la cour de Kyoto"],
  ['periode-kamakura', 'histoire', 'Époque de Kamakura', 'Le shogunat de Kamakura', 'Le pouvoir des samouraïs'],
  ['periode-sengoku', 'histoire', 'Période Sengoku', "L'époque Sengoku", 'Le siècle des guerres civiles'],
  ['periode-edo', 'histoire', "Époque d'Edo", "L'époque Edo (Tokugawa)", '250 ans de paix et d\'isolement'],
  ['restauration-meiji', 'histoire', 'Restauration de Meiji', 'La restauration Meiji', 'La modernisation fulgurante du Japon'],
  ['japon-seconde-guerre', 'histoire', 'Guerre du Pacifique', 'Le Japon dans la Seconde Guerre mondiale', "De l'expansion à la capitulation"],
  ['miracle-economique', 'histoire', 'Miracle économique japonais', 'Le miracle économique japonais', 'De la reconstruction à la 2e puissance mondiale'],
  ['samourai', 'histoire', 'Samouraï', "L'âge des samouraïs", 'Naissance et essor de la classe guerrière'],
  ['bushido', 'histoire', 'Bushido', 'Le Bushido', 'La voie du guerrier'],
  ['sekigahara', 'histoire', 'Bataille de Sekigahara', 'La bataille de Sekigahara', 'Le combat qui a fondé le shogunat Tokugawa'],
  ['tokugawa-ieyasu', 'histoire', 'Tokugawa Ieyasu', 'Tokugawa Ieyasu', 'Le fondateur du shogunat d\'Edo'],
  ['oda-nobunaga', 'histoire', 'Oda Nobunaga', 'Oda Nobunaga', "Le premier unificateur du Japon"],
  ['toyotomi-hideyoshi', 'histoire', 'Toyotomi Hideyoshi', 'Toyotomi Hideyoshi', 'Du paysan au maître du Japon'],
  ['sakoku', 'histoire', 'Sakoku', 'Le Sakoku', 'Le pays fermé (1639-1853)'],
  ['hiroshima-nagasaki', 'histoire', "Bombardements atomiques d'Hiroshima et de Nagasaki", "Hiroshima et Nagasaki", 'Les bombardements atomiques de 1945'],

  // ---- Nature, insolite, animaux ----
  ['mont-fuji', 'insolite', 'Mont Fuji', 'Le mont Fuji', 'Le volcan sacré du Japon'],
  ['yakushima', 'insolite', 'Yakushima', 'Île de Yakushima', 'Forêt de cèdres millénaires'],
  ['shirakami-sanchi', 'insolite', 'Monts Shirakami', 'Forêt vierge de Shirakami-Sanchi', 'Un site naturel classé UNESCO'],
  ['sapporo-neige', 'insolite', 'Festival de la neige de Sapporo', 'Festival de la neige de Sapporo', 'Des sculptures de glace géantes'],
  ['naoshima', 'insolite', 'Naoshima', 'Naoshima', "L'île de l'art contemporain"],
  ['tokyo-skytree', 'insolite', 'Tokyo Skytree', 'Tokyo Skytree', 'La plus haute tour du Japon'],
  ['dotonbori', 'insolite', 'Dōtonbori', 'Dotonbori', "Le quartier de la street food d'Osaka"],
  ['nara-park', 'animaux', 'Parc de Nara', 'Parc de Nara', 'Rencontre avec les cerfs sacrés'],
  ['jigokudani', 'animaux', 'Parc aux singes de Jigokudani', 'Jigokudani Park', 'Les singes des neiges dans les onsens'],
  ['okunoshima', 'animaux', 'Ōkunoshima', 'Okunoshima', "L'île aux lapins"],
  ['chats-tashirojima', 'animaux', 'Tashirojima', "Tashirojima, l'île aux chats", 'Plus de chats que d\'habitants'],
  ['tanuki-statue', 'animaux', 'Tanuki', 'Le tanuki, animal porte-bonheur', 'Le chien viverrin du folklore'],

  // ---- Contes, légendes, mythologie ----
  ['hachiko', 'contes', 'Hachikō', 'Hachiko', 'La statue du chien fidèle'],
  ['ghibli', 'contes', 'Musée Ghibli', 'Musée Ghibli', 'Hommage merveilleux à Miyazaki'],
  ['kappa-legende', 'contes', 'Kappa', 'Le Kappa', 'La créature aquatique facétieuse du folklore'],
  ['kitsune-legende', 'contes', 'Kitsune', 'Le Kitsune', 'Le renard aux pouvoirs surnaturels'],
  ['tengu-legende', 'contes', 'Tengu', 'Le Tengu', "L'esprit ailé des montagnes"],
  ['oni-demons', 'contes', 'Oni', 'Les Oni', 'Les ogres-démons du folklore japonais'],
  ['yuki-onna', 'contes', 'Yuki-onna', 'Yuki-onna, la femme des neiges', 'La femme des neiges'],
  ['urashima-taro', 'contes', 'Urashima Tarō', 'Urashima Taro', 'Le pêcheur du palais du dieu-dragon'],
  ['momotaro', 'contes', 'Momotarō', "Momotaro, l'enfant né d'une pêche", 'Le conte japonais le plus célèbre'],
  ['izanagi-izanami', 'contes', 'Izanagi et Izanami', 'Izanagi et Izanami', 'Le mythe fondateur de la création du Japon'],
  ['amaterasu-grotte', 'contes', 'Amaterasu', 'Amaterasu et la grotte céleste', "Le mythe de l'origine du soleil"],
  ['yamamba', 'contes', 'Yama-uba', 'Yamamba, la sorcière des montagnes', 'Entre horreur et sagesse'],
  ['kintaro-legende', 'contes', 'Kintarō', "Kintaro, l'enfant à la force herculéenne", 'Le garçon d\'or'],
  ['princesse-kaguya', 'contes', 'Conte du coupeur de bambou', 'Le Conte du coupeur de bambous', 'La légende de la princesse Kaguya'],
  ['yokai-mizuki', 'contes', 'Yōkai', 'Les yokai et Shigeru Mizuki', 'Les créatures surnaturelles du folklore'],
  ['tanabata-legende', 'contes', 'Tanabata', 'Tanabata', 'La légende des amants séparés par la Voie lactée'],

  // ---- Arts ----
  ['kabuki', 'arts', 'Kabuki', 'Le théâtre Kabuki', 'Danse, chant et maquillage spectaculaire'],
  ['noh-theatre-art', 'arts', 'Nô', 'Le théâtre Nô', 'Le plus ancien théâtre encore joué au monde'],
  ['bunraku', 'arts', 'Bunraku', 'Le Bunraku', 'Le théâtre de marionnettes japonais'],
  ['ukiyo-e', 'arts', 'Ukiyo-e', "L'estampe ukiyo-e", 'Les images du monde flottant'],
  ['origami-art', 'arts', 'Origami', "L'Origami", "L'art du pliage de papier"],
  ['bonsai-art', 'arts', 'Bonsaï', 'Le Bonsaï', 'Un paysage entier dans un pot'],
  ['ikebana-shodo', 'arts', 'Ikebana', 'Ikebana et shodo', "L'art floral japonais"],
  ['sumo', 'arts', 'Sumo', 'Le Sumo', 'Le sport-rituel national japonais'],
  ['geisha-maiko', 'arts', 'Geisha', 'Geisha et Maiko', "Les artistes de l'ombre de Kyoto"],
  ['cerimonie-the', 'arts', 'Cérémonie du thé japonaise', 'La cérémonie du thé', "Sado, l'art du geste et du silence"],
  ['shodo-calligraphie', 'arts', 'Shodō', 'Le Shodo, art de la calligraphie', 'La voie du pinceau'],
  ['washi-papier', 'arts', 'Washi', 'Le papier Washi', 'Le papier traditionnel japonais'],

  // ---- Tatouages ----
  ['irezumi-histoire', 'tatouages', 'Irezumi', "Histoire de l'Irezumi", "Des marques pénales à l'art corporel"],
  ['tebori-technique', 'tatouages', 'Tebori', 'Le Tebori, tatouage à la main', 'La technique ancestrale'],
  ['irezumi-yakuza', 'tatouages', 'Yakuza', 'Irezumi et yakuza', 'Un lien historique et une mauvaise image'],

  // ---- Littérature ----
  ['genji-monogatari', 'litterature', 'Dit du Genji', 'Le Dit du Genji', 'Le premier roman psychologique de l\'Histoire'],
  ['makura-no-soshi', 'litterature', 'Notes de chevet', 'Notes de chevet (Makura no Soshi)', 'Les carnets de Sei Shonagon'],
  ['oku-no-hosomichi', 'litterature', 'La Sente étroite du Oku', 'La Sente étroite du bout du monde', 'Le voyage de Basho'],
  ['haiku', 'litterature', 'Haïku', 'Le Haïku', 'La poésie la plus courte du monde'],
  ['matsuo-basho', 'litterature', 'Matsuo Bashō', 'Matsuo Basho', 'Le maître du haïku'],
  ['natsume-soseki', 'litterature', 'Natsume Sōseki', 'Natsume Soseki', 'Le père de la littérature moderne'],
  ['yukio-mishima', 'litterature', 'Yukio Mishima', 'Yukio Mishima', 'Génie littéraire et fin tragique'],
  ['haruki-murakami', 'litterature', 'Haruki Murakami', 'Haruki Murakami', "L'écrivain japonais le plus lu au monde"],

  // ---- Culture pop, sortir, cinéma ----
  ['akihabara-anime', 'anime', 'Akihabara', 'Akihabara', 'Le quartier des otaku'],
  ['golden-gai', 'sortir', 'Golden Gai', 'Golden Gai à Shinjuku', 'Des centaines de mini-bars'],
  ['kurosawa-cinema', 'films', 'Akira Kurosawa', 'Akira Kurosawa et le cinéma japonais classique', 'Le maître des Sept Samouraïs']
];

// Anciennes fiches courtes que j'avais créées et qui font doublon avec une fiche ci-dessus.
const A_SUPPRIMER = ['todai-ji'];

// ---------- Appels API (Wikipédia / Wikivoyage / Commons) ----------
async function api(host, params) {
  const url = `https://${host}/w/api.php?` + new URLSearchParams({ format: 'json', formatversion: '2', ...params });
  const res = await fetch(url, { headers: HEADERS });
  if (!res.ok) throw new Error(`HTTP ${res.status} sur ${host}`);
  return res.json();
}

async function fetchPage(host, title) {
  const j = await api(host, {
    action: 'query', prop: 'extracts|coordinates|pageprops|pageimages|info', explaintext: 1, exsectionformat: 'wiki',
    redirects: 1, titles: title, inprop: 'url', ppprop: 'wikibase-shortdesc|disambiguation', piprop: 'name', colimit: 1
  });
  const p = j.query && j.query.pages && j.query.pages[0];
  if (!p || p.missing || !p.extract) return null;
  return p;
}

async function searchTitle(host, q) {
  const j = await api(host, { action: 'query', list: 'search', srsearch: q, srlimit: 1 });
  const r = j.query && j.query.search && j.query.search[0];
  return r ? r.title : null;
}

async function fetchImages(host, title) {
  const j = await api(host, {
    action: 'query', generator: 'images', gimlimit: 60, titles: title, redirects: 1,
    prop: 'imageinfo', iiprop: 'url|size|mime|extmetadata', iiurlwidth: 1400
  });
  const strip = s => (s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  const out = [];
  for (const p of (j.query && j.query.pages) || []) {
    const ii = p.imageinfo && p.imageinfo[0];
    if (!ii || p.imagerepository !== 'shared') continue;        // uniquement Wikimedia Commons (libre)
    if (ii.mime !== 'image/jpeg') continue;                      // pas de svg/png (logos, cartes)
    if (Math.max(ii.width, ii.height) < 1000) continue;          // pas de miniatures
    if (/(logo|flag|drapeau|icon|ic[oô]ne|map|carte|locator|blason|symbol|sceau|plan_|diagram|signature)/i.test(p.title)) continue;
    const md = ii.extmetadata || {};
    out.push({
      titre: p.title.replace(/^Fichier:|^File:/, ''),
      url: ii.thumburl || ii.url,
      page: ii.descriptionurl,
      auteur: strip(md.Artist && md.Artist.value) || 'auteur inconnu',
      licence: strip(md.LicenseShortName && md.LicenseShortName.value) || 'licence libre'
    });
  }
  return out;
}

// ---------- Mise en forme ----------
const SECTIONS_IGNOREES = /^(notes?( et références)?|références|voir aussi|liens externes|bibliographie|annexes|articles connexes|sources|galerie|iconographie|filmographie|discographie|publications|œuvres|éditions|traductions|notes et références)$/i;

function parseSections(text) {
  const secs = []; let cur = { title: '', level: 0, body: [] };
  for (const line of text.split('\n')) {
    const m = line.match(/^(={2,4})\s*(.+?)\s*\1\s*$/);
    if (m) { secs.push(cur); cur = { title: m[2], level: m[1].length, body: [] }; } else cur.body.push(line);
  }
  secs.push(cur);
  return secs.map(s => ({ title: s.title, level: s.level, text: s.body.join('\n').replace(/\n{3,}/g, '\n\n').trim() }));
}

function coupe(text, max) {                                      // coupe proprement à la fin d'un paragraphe
  if (text.length <= max) return text;
  let out = '';
  for (const para of text.split('\n')) {
    if ((out + '\n' + para).length > max && out) break;
    out += (out ? '\n' : '') + para;
  }
  return out;
}

function buildEntry(item, page, images, voyage) {
  const [id, categorie, , titre, sousTitre] = item;
  const secs = parseSections(page.extract);
  const intro = coupe(secs[0].text, 1600);

  // sections gardées (les sous-sections niveau 3-4 sont fusionnées dans leur parent)
  const gardees = [];
  for (const s of secs.slice(1)) {
    if (SECTIONS_IGNOREES.test(s.title)) continue;
    if (s.level >= 3 && gardees.length) { gardees[gardees.length - 1].text += '\n\n' + s.text; continue; }
    if (s.text.length >= 120) gardees.push({ title: s.title, text: s.text });
  }

  const photos = images.slice();
  const lead = page.pageimage ? photos.findIndex(i => i.titre.replace(/_/g, ' ') === page.pageimage.replace(/_/g, ' ')) : -1;
  if (lead > 0) photos.unshift(photos.splice(lead, 1)[0]);       // la photo principale de l'article en premier
  const hero = photos[0];
  const gallery = photos.slice(1, 7);
  let next = 1;

  const blocs = [{ type: 'texte', val: intro }];
  gardees.slice(0, 8).forEach((s, i) => {
    blocs.push({ type: 'titre', val: s.title });
    blocs.push({ type: 'texte', val: coupe(s.text, 2200) });
    if (i % 2 === 0 && photos[next]) { blocs.push({ type: 'image', val: photos[next].url }); next++; }
  });

  const credit = photos.slice(0, next).map(i => `« ${i.titre} » par ${i.auteur} (${i.licence})`).join(' ; ');
  blocs.push({
    type: 'texte',
    val: `Texte adapté de l'article « ${page.title} » de Wikipédia en français (${page.fullurl}), licence CC BY-SA 4.0` +
      (voyage.used ? ' et de Wikivoyage (CC BY-SA 4.0)' : '') + '.' +
      (credit ? `\nPhotos : Wikimedia Commons — ${credit}.` : '')
  });

  const premierePhrase = intro.split('\n')[0];
  const phrases = premierePhrase.split(/(?<=[.!?])\s+/);
  let desc = phrases[0];
  if (desc.length < 90 && phrases[1]) desc += ' ' + phrases[1];
  if (desc.length > 260) desc = desc.slice(0, 257).trim() + '...';

  const coord = page.coordinates && page.coordinates[0];
  return {
    fixes: { id, categorie, titre, sousTitre: sousTitre || (page.pageprops && page.pageprops['wikibase-shortdesc']) || '' },
    set: {
      categorie, titre,
      sousTitre: sousTitre || (page.pageprops && page.pageprops['wikibase-shortdesc']) || '',
      desc,
      descLongue: [intro, ...gardees.slice(0, 8).map(s => coupe(s.text, 2200))].join('\n\n').slice(0, 9000),
      img: hero ? hero.url : '',
      galerie: gallery.map(g => g.url).join('\n'),
      blocs,
      ...(coord ? { lat: String(coord.lat), lng: String(coord.lon) } : {}),
      ...(voyage.p_trans ? { p_trans: voyage.p_trans } : {}),
      ...(voyage.s_prix ? { s_prix: voyage.s_prix } : {})
    },
    // champs que tu peux remplir à la main : ne sont posés qu'à la création de la fiche
    onInsert: { p_net: '', p_evt: '', s_quand: '', s_nom: '', s_horaire: '', web: '', meteo: '',
      c1: ['', '', '', '', ''], c2: ['', '', '', '', ''], c3: ['', '', '', '', ''], auteur: 'wikipedia', createdAt: new Date() },
    resume: { wiki: page.title, sections: gardees.slice(0, 8).length, photos: photos.slice(0, next).length + gallery.length, lieu: !!coord }
  };
}

async function fetchVoyage(title) {                              // best-effort : Wikivoyage n'a pas tous les lieux
  try {
    const p = await fetchPage('fr.wikivoyage.org', title);
    if (!p) return {};
    const secs = parseSections(p.extract);
    const trouve = re => secs.find(s => re.test(s.title) && s.text.length > 40);
    const aller = trouve(/^(aller|accès|se rendre|comment)/i);
    const prix = trouve(/^(tarifs?|prix|budget|coût)/i);
    const out = { used: !!(aller || prix) };
    if (aller) out.p_trans = coupe(aller.text, 1200);
    if (prix) out.s_prix = coupe(prix.text, 800);
    return out;
  } catch (e) { return {}; }
}

async function construire(item) {
  const [id, , wiki] = item;
  let page = await fetchPage('fr.wikipedia.org', wiki);
  let note = '';
  if (!page || (page.pageprops && page.pageprops.disambiguation !== undefined)) {
    const alt = await searchTitle('fr.wikipedia.org', `${wiki} Japon`);
    if (!alt) throw new Error('introuvable');
    page = await fetchPage('fr.wikipedia.org', alt);
    if (!page) throw new Error('introuvable');
    note = `⚠️ titre exact introuvable, utilisé : « ${page.title} » (vérifie que c'est le bon)`;
  }
  const images = await fetchImages('fr.wikipedia.org', page.title);
  const voyage = await fetchVoyage(page.title);
  const entry = buildEntry(item, page, images, voyage);
  entry.note = note;
  return entry;
}

async function main() {
  const liste = LISTE.filter(it => !ONLY.length || ONLY.includes(it[0]));
  if (!liste.length) { console.log('Aucune fiche ne correspond à --only.'); return; }

  let Lieu = null;
  if (DRY) fs.mkdirSync(path.join(__dirname, 'wiki-preview'), { recursive: true });
  else {
    await mongoose.connect(process.env.MONGO_URI);
    Lieu = mongoose.model('Lieu', new mongoose.Schema({ id: { type: String, required: true, unique: true } }, { strict: false }));
    console.log('Connecté à MongoDB.');
  }

  let ok = 0; const echecs = [];
  for (const item of liste) {
    try {
      const e = await construire(item);
      if (DRY) fs.writeFileSync(path.join(__dirname, 'wiki-preview', item[0] + '.json'), JSON.stringify({ id: item[0], ...e.set }, null, 2));
      else await Lieu.updateOne({ id: item[0] }, { $set: e.set, $setOnInsert: e.onInsert }, { upsert: true });
      console.log(`✅ ${item[0]} ← « ${e.resume.wiki} » (${e.resume.sections} sections, ${e.resume.photos} photos${e.resume.lieu ? ', carte' : ''})`);
      if (e.note) console.log('   ' + e.note);
      ok++;
    } catch (err) {
      console.log(`❌ ${item[0]} (${item[2]}) : ${err.message}`);
      echecs.push(item[0]);
    }
    await pause(400);
  }

  if (!DRY && !ONLY.length) {
    for (const id of A_SUPPRIMER) {
      const r = await Lieu.deleteOne({ id });
      if (r.deletedCount) console.log(`🗑️  ancienne fiche courte « ${id} » supprimée (doublon)`);
    }
  }
  console.log(`\nTerminé : ${ok}/${liste.length} fiches ${DRY ? 'générées dans ./wiki-preview/' : 'importées'}.`);
  if (echecs.length) console.log('À revoir : ' + echecs.join(', '));
  if (!DRY) await mongoose.disconnect();
}

module.exports = { buildEntry, parseSections, LISTE, main };
if (require.main === module) main().catch(e => { console.error(e); process.exit(1); });

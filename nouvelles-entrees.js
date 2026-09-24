// --- nouvelles-entrees.js ---
// Contenu ajouté pour remplir les catégories vides. Importé par seed.js dans MongoDB (collection "lieux").
const nouvellesEntrees = [

  // ============== VOCABULAIRE : SE PRÉSENTER ==============
  { id: "voc-presenter", categorie: "presenter", titre: "Se présenter", sousTitre: "Les bases pour la première rencontre",
    desc: "Les phrases indispensables pour se présenter au Japon.",
    descLongue: "Watashi wa [prénom] desu → Je m'appelle [prénom]\nHajimemashite → Enchanté (à la première rencontre)\nYoroshiku onegaishimasu → Ravi de faire ta connaissance / merci d'avance\n[Pays] kara kimashita → Je viens de [pays]\nNansai desu ka ? → Quel âge as-tu ?\n[Âge] sai desu → J'ai [âge] ans\nShumi wa nan desu ka ? → Quel est ton passe-temps ?",
    img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80" },

  // ============== BONJOUR ET AU REVOIR ==============
  { id: "voc-bonjour", categorie: "bonjour", titre: "Bonjour et au revoir", sousTitre: "Les salutations de tous les jours",
    desc: "Ohayo, Konnichiwa, Konbanwa... quand utiliser quoi.",
    descLongue: "Ohayo gozaimasu → Bonjour (le matin)\nKonnichiwa → Bonjour (journée)\nKonbanwa → Bonsoir\nOyasumi nasai → Bonne nuit\nSayonara → Au revoir (assez formel / longue durée)\nMata ne → À plus\nItte kimasu → Je pars (et je reviens) - en quittant la maison\nTadaima → Je suis rentré",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80" },

  // ============== OUI ET NON ==============
  { id: "voc-ouinon", categorie: "ouinon", titre: "Oui et non", sousTitre: "Accepter, refuser, nuancer",
    desc: "Hai, Iie, et toutes les façons polies de dire non au Japon.",
    descLongue: "Hai → Oui\nIie → Non\nChigaimasu → C'est faux / ce n'est pas ça\nDaijoubu desu → Ça va / c'est bon (peut aussi vouloir dire 'non merci' poliment)\nChotto... → Euh... (façon très japonaise de refuser sans dire non directement)\nWakarimashita → Compris\nWakarimasen → Je ne comprends pas / je ne sais pas",
    img: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=800&q=80" },

  // ============== REMERCIER ET S'EXCUSER ==============
  { id: "voc-remercier", categorie: "remercier", titre: "Remercier et s'excuser", sousTitre: "La politesse avant tout",
    desc: "Arigato, Sumimasen, Gomenasai : les nuances essentielles.",
    descLongue: "Arigato gozaimasu → Merci beaucoup\nDomo arigato → Merci (un peu moins formel)\nSumimasen → Excusez-moi / pardon (aussi pour attirer l'attention)\nGomenasai → Je suis désolé(e)\nMoshiwake gozaimasen → Toutes mes excuses (très formel)\nDo itashimashite → Je t'en prie / de rien",
    img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80" },

  // ============== COMPTER ET ÂGE ==============
  { id: "voc-compter", categorie: "compter", titre: "Compter et l'âge", sousTitre: "Les nombres japonais",
    desc: "Ichi, ni, san... apprends à compter simplement.",
    descLongue: "1 Ichi, 2 Ni, 3 San, 4 Yon/Shi, 5 Go, 6 Roku, 7 Nana/Shichi, 8 Hachi, 9 Kyu, 10 Ju\n100 Hyaku, 1000 Sen, 10 000 Man\nAttention : le japonais compte par groupes de 4 zéros (man = 10 000), pas de 3 comme en français !\nPour l'âge : [nombre] + sai. Exception : 20 ans se dit 'hatachi'.",
    img: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=800&q=80" },

  // ============== DATE ET HEURE ==============
  { id: "voc-date", categorie: "date", titre: "La date et l'heure", sousTitre: "Se repérer dans le temps",
    desc: "Jours de la semaine, mois et comment donner l'heure.",
    descLongue: "Getsuyobi → Lundi, Kayobi → Mardi, Suiyobi → Mercredi, Mokuyobi → Jeudi, Kin'yobi → Vendredi, Doyobi → Samedi, Nichiyobi → Dimanche\nKyo → Aujourd'hui, Ashita → Demain, Kino → Hier\nIma nanji desu ka ? → Quelle heure est-il ?\n[heure]-ji [minute]-fun → format pour dire l'heure (ex : 3-ji 15-fun = 15h15)",
    img: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80" },

  // ============== JE T'AIME ==============
  { id: "voc-jetaime", categorie: "jetaime", titre: "Je t'aime", sousTitre: "Les mots doux en japonais",
    desc: "Comment exprimer son affection, du simple 'j'aime bien' au grand amour.",
    descLongue: "Suki desu → Je t'aime bien / j'aime ça\nDaisuki desu → Je t'aime beaucoup\nAishiteru → Je t'aime (fort, réservé aux couples engagés)\nKoibito → Petit(e) ami(e)\nTsukiatte kudasai → Veux-tu sortir avec moi ?\nNote culturelle : les Japonais expriment souvent l'affection par des gestes plus que par des mots.",
    img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80" },

  // ============== JOYEUX ANNIVERSAIRE ==============
  { id: "voc-anniv", categorie: "anniv", titre: "Joyeux anniversaire", sousTitre: "Souhaiter et fêter",
    desc: "Comment souhaiter un anniversaire et les traditions autour de la fête.",
    descLongue: "Otanjoubi omedetou (gozaimasu) → Joyeux anniversaire\nOmedetou → Félicitations (pour toute occasion heureuse)\nAu Japon, l'anniversaire se fête souvent en petit comité ; le vrai 'passage à l'âge adulte' collectif a lieu à 20 ans lors du Seijin Shiki (jour de la majorité), en janvier.",
    img: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=800&q=80" },

  // ============== BON APPÉTIT ==============
  { id: "voc-appetit", categorie: "appetit", titre: "Bon appétit", sousTitre: "Les mots de table japonais",
    desc: "Itadakimasu, Gochisousama : les rituels avant et après le repas.",
    descLongue: "Itadakimasu → dit avant de manger (littéralement 'je reçois humblement')\nGochisousama deshita → dit après le repas pour remercier\nOishii ! → C'est délicieux !\nOkawari onegaishimasu → Une autre portion, s'il vous plaît\nKanpai ! → Santé ! (pour trinquer)",
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80" },

  // ============== ÉCRIRE SON PRÉNOM ==============
  { id: "voc-prenom", categorie: "prenom", titre: "Écrire son prénom en japonais", sousTitre: "Katakana pour les prénoms étrangers",
    desc: "Les prénoms étrangers s'écrivent en général en Katakana, l'un des trois alphabets japonais.",
    descLongue: "Le Katakana sert à transcrire les mots et prénoms d'origine étrangère.\nExemples : Léo → レオ (Reo), Emma → エマ (Ema), Lucas → ルカス (Rukasu)\nAstuce : cherche 'convertisseur katakana' en ligne pour transcrire ton propre prénom, ou demande dans une papeterie (bunbōgu-ten) au Japon, ils adorent aider !",
    img: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=800&q=80" },

  // ============== LES SUFFIXES ==============
  { id: "voc-suffixes", categorie: "suffixes", titre: "Les suffixes honorifiques", sousTitre: "-san, -kun, -chan, -sama...",
    desc: "Comprendre les suffixes qu'on ajoute après les noms au Japon.",
    descLongue: "-san → neutre et poli, utilisable avec tout le monde (M./Mme équivalent)\n-sama → très respectueux, pour les clients ou personnes de haut rang\n-kun → utilisé pour les garçons/jeunes hommes ou entre collègues proches\n-chan → affectueux, pour les enfants, les proches ou les filles\n-senpai → pour un aîné dans l'école ou le travail\n-sensei → pour un professeur, médecin ou expert\nNe jamais utiliser de suffixe pour parler de soi-même !",
    img: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=800&q=80" },

  // ============== TRADUCTIONS UTILES ==============
  { id: "voc-traductions", categorie: "traductions", titre: "Phrases utiles du quotidien", sousTitre: "Pour se débrouiller partout",
    desc: "Les phrases essentielles pour un voyage sans stress.",
    descLongue: "Eigo o hanasemasu ka ? → Parlez-vous anglais ?\nKore wa nan desu ka ? → Qu'est-ce que c'est ?\nIkura desu ka ? → Combien ça coûte ?\nToire wa doko desu ka ? → Où sont les toilettes ?\nTasukete ! → Au secours !\nMou ichido itte kudasai → Répétez s'il vous plaît\nEki wa doko desu ka ? → Où est la gare ?",
    img: "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=800&q=80" },

  // ============== ÉTUDIER AU JAPON ==============
  { id: "voc-etudier", categorie: "etudier", titre: "Étudier au Japon", sousTitre: "Écoles de langue, université, visa étudiant",
    desc: "Les grandes étapes pour venir étudier le japonais ou suivre un cursus universitaire.",
    descLongue: "Visa étudiant (ryugaku) : nécessite une lettre d'admission d'un établissement japonais reconnu.\nÉcoles de langue : cursus de 6 mois à 2 ans, souvent à Tokyo ou Osaka, permettent ensuite de candidater à l'université.\nJLPT : le test de niveau (N5 à N1) est souvent demandé pour l'admission ou un emploi.\nBudget à prévoir : entre 700 000 et 1 200 000 yens/an pour une école de langue (frais + logement).",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80" },

  // ============== VISITES : HISTOIRE ==============
  { id: "kinkakuji", categorie: "histoire", titre: "Le Pavillon d'Or (Kinkaku-ji)", sousTitre: "Le temple recouvert d'or de Kyoto",
    desc: "Un des monuments les plus photographiés du Japon, entièrement recouvert de feuilles d'or.",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80", lat: 35.0394, lng: 135.7292 },
  { id: "fushimi-inari", categorie: "histoire", titre: "Fushimi Inari-taisha", sousTitre: "Les milliers de torii rouges",
    desc: "Le sanctuaire aux dix mille torii, à Kyoto, célèbre pour son sentier de portails vermillon.",
    img: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=1200&q=80", lat: 34.9671, lng: 135.7727 },

  // ============== ARTS JAPONAIS ==============
  { id: "cerimonie-the", categorie: "arts", titre: "La cérémonie du thé", sousTitre: "Sado, l'art du geste et du silence",
    desc: "Un rituel codifié où chaque geste compte, hérité du bouddhisme zen.",
    img: "https://images.unsplash.com/photo-1536010263540-c0f4f2b32c7d?auto=format&fit=crop&w=1200&q=80" },
  { id: "kabuki", categorie: "arts", titre: "Le théâtre Kabuki", sousTitre: "Danse, chant et maquillage spectaculaire",
    desc: "Art dramatique traditionnel né au XVIIe siècle, reconnaissable à ses costumes et maquillages.",
    img: "https://images.unsplash.com/photo-1610375461369-d613b564f4c4?auto=format&fit=crop&w=1200&q=80" },

  // ============== LITTÉRATURE ==============
  { id: "haiku", categorie: "litterature", titre: "Le Haïku", sousTitre: "La poésie la plus courte du monde",
    desc: "Poème de 17 syllabes (5-7-5) popularisé par Matsuo Bashō, capturant un instant de nature.",
    img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80" },

  // ============== ANIME / MANGA ==============
  { id: "akihabara-anime", categorie: "anime", titre: "Akihabara", sousTitre: "Le quartier geek de Tokyo",
    desc: "Le paradis des mangas, jeux vidéo, figurines et maid cafés.",
    img: "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=1200&q=80", lat: 35.7022, lng: 139.7745 },

  // ============== SORTIR LE SOIR ==============
  { id: "izakaya", categorie: "sortir", titre: "L'Izakaya", sousTitre: "Le bar-restaurant convivial japonais",
    desc: "Équivalent du bistrot, on y partage des petits plats (kushiyaki, edamame...) autour d'une bière.",
    img: "https://images.unsplash.com/photo-1579027989054-b11b0b7c1c9c?auto=format&fit=crop&w=1200&q=80" },

  // ============== VISAS ==============
  { id: "visa-tourisme", categorie: "visas", titre: "Visa touriste pour le Japon", sousTitre: "Ce qu'il faut savoir avant de partir",
    desc: "Pour les citoyens français, l'exemption de visa touristique permet un séjour jusqu'à 90 jours.",
    descLongue: "Séjour de moins de 90 jours : pas de visa nécessaire pour les citoyens français, belges, suisses et canadiens (juste un passeport valide).\nSéjour plus long ou motif spécifique (travail, études) : un visa dédié est obligatoire, à demander avant le départ auprès du consulat.\nÀ prévoir : billet retour ou de continuation parfois demandé à l'arrivée.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80" },

  // ============== BONS PLANS & TRANSPORTS (categorie existante: avion, hebergement, activite, transport) ==============
  { id: "jr-pass", categorie: "transports", titre: "Le JR Pass", sousTitre: "Le pass ferroviaire pour voyager pas cher",
    desc: "Un forfait illimité sur le réseau Japan Railways, rentable pour un roadtrip de plusieurs villes.",
    descLongue: "Depuis la hausse des prix en 2023, le JR Pass n'est rentable que si tu fais au moins un long trajet en Shinkansen (ex : Tokyo-Osaka aller-retour).\nS'achète à l'avance en ligne ou dans certaines gares japonaises.\nExiste en formules 7, 14 ou 21 jours.\nAlternative : les pass régionaux (JR Kansai, JR East...) souvent plus économiques si tu restes dans une seule région.",
    img: "https://images.unsplash.com/photo-1552820796-08a3cbf1ef78?auto=format&fit=crop&w=1200&q=80" },
  { id: "suica-pasmo", categorie: "transports", titre: "Carte Suica / Pasmo", sousTitre: "La carte de transport indispensable",
    desc: "Carte rechargeable utilisable dans les métros, bus, trains et distributeurs partout au Japon.",
    descLongue: "Disponible en version physique dans les gares (Suica à Tokyo, Icoca à Osaka...) ou en version dématérialisée dans l'app Wallet sur iPhone.\nSe recharge facilement aux bornes automatiques.\nUtilisable aussi dans les konbini (supérettes) pour payer les courses !",
    img: "https://images.unsplash.com/photo-1550951298-6c8ee7be3caa?auto=format&fit=crop&w=1200&q=80" },
  { id: "vol-japon", categorie: "avion", titre: "Trouver un vol pas cher pour le Japon", sousTitre: "Périodes creuses et astuces de réservation",
    desc: "Les meilleures périodes et stratégies pour payer son vol moins cher.",
    descLongue: "Évite avril (Golden Week) et les vacances scolaires japonaises (fin décembre-début janvier) : prix qui explosent.\nMeilleure période prix : janvier-février et juin (hors Golden Week).\nCompare avec un comparateur de vols et active une alerte de prix 2-3 mois avant le départ.\nLes compagnies japonaises (ANA, JAL) ont parfois des offres avec escale moins chères que les vols directs.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80" },
  { id: "hebergement-japon", categorie: "hebergement", titre: "Où dormir au Japon sans se ruiner", sousTitre: "Hôtels, capsules, ryokan, guesthouses",
    desc: "Panorama des types d'hébergements et de leur budget moyen.",
    descLongue: "Guesthouse / auberge de jeunesse : 2 500-4 000 yens/nuit, bon plan solo.\nHôtel business (ex : Toyoko Inn, APA) : 6 000-9 000 yens/nuit, chambre petite mais efficace.\nHôtel capsule : 3 000-5 000 yens, expérience originale.\nRyokan traditionnel : 10 000-25 000 yens, souvent avec onsen privé et repas kaiseki inclus — à faire au moins une fois !",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80" },

  // ============== GUIDE CULTUREL : CATÉGORIES COMPLÉTÉES ==============
  { id: "kabuki-za", categorie: "musique", titre: "Théâtre Kabuki-za", sousTitre: "Le temple du kabuki à Ginza",
    desc: "La plus grande salle de kabuki de Tokyo, où assister à ce théâtre traditionnel japonais haut en couleurs.",
    descLongue: "Construit à Ginza, le Kabuki-za propose des places à l'acte unique (moins chères) pour découvrir le kabuki sans s'engager sur 4h de spectacle.\nLes costumes, le maquillage (kumadori) et le jeu très codifié en font une expérience unique.\nAudioguide en anglais disponible.",
    img: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80" },
  { id: "ghibli-park", categorie: "films", titre: "Ghibli Park", sousTitre: "Le parc à thème dédié au Studio Ghibli",
    desc: "Ouvert en 2022 près de Nagoya, ce parc immersif recrée les univers de Totoro, Kiki et Princesse Mononoké.",
    descLongue: "Contrairement à un parc d'attractions classique, Ghibli Park mise sur l'immersion et la reconstitution de décors plutôt que sur les manèges.\nRéservation des billets à l'avance obligatoire (souvent complet plusieurs semaines à l'avance).\nSitué à Nagakute, à environ 40 min de Nagoya.",
    img: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=80" },
  { id: "irezumi-onsen", categorie: "tatouages", titre: "Onsen et tatouages", sousTitre: "Où se baigner quand on est tatoué",
    desc: "Les tatouages restent mal vus dans les bains traditionnels : voici comment quand même profiter des sources chaudes.",
    descLongue: "Historiquement associés aux yakuzas, les tatouages sont interdits dans la majorité des onsens publics.\nSolutions : réserver un bain privé (kashikiri buro), utiliser des patchs cache-tatouages, ou chercher les établissements 'tattoo friendly' recensés sur des sites comme Tattoo Friendly Onsen Japan.\nLes onsens d'hôtels internationaux sont souvent plus tolérants que les bains municipaux.",
    img: "https://images.unsplash.com/photo-1582298538104-fe2e74cb2827?auto=format&fit=crop&w=1200&q=80" },
  { id: "harajuku-mode", categorie: "mode", titre: "Les tribus mode de Harajuku", sousTitre: "Lolita, decora, visual kei...",
    desc: "Harajuku est le laboratoire de toutes les modes alternatives japonaises depuis les années 90.",
    descLongue: "Lolita : robes inspirées de la mode victorienne, univers pastel et dentelle.\nDecora : accumulation d'accessoires colorés et de bijoux fantaisie.\nVisual kei : esthétique rock/metal androgyne popularisée par des groupes comme X Japan.\nLe dimanche est le meilleur jour pour observer ces styles dans la rue.",
    img: "https://images.unsplash.com/photo-1542051812-f435cebc61b2?auto=format&fit=crop&w=1200&q=80" },
  { id: "travailler-japon", categorie: "travailler", titre: "Travailler au Japon", sousTitre: "Visas de travail et marché de l'emploi",
    desc: "Panorama des visas et des secteurs qui recrutent des étrangers au Japon.",
    descLongue: "Le visa 'Ingénieur/Spécialiste en sciences humaines' est le plus courant pour les emplois de bureau qualifiés.\nLe JET Programme recrute des enseignants d'anglais natifs pour les écoles publiques.\nLe Working Holiday Visa (18-30 ans selon nationalité) permet de travailler librement jusqu'à 1 an.\nLes secteurs qui recrutent le plus : enseignement des langues, IT, tourisme, restauration.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" },
  { id: "femmes-japon", categorie: "femmes", titre: "Voyager au Japon en tant que femme", sousTitre: "Sécurité et bons réflexes",
    desc: "Le Japon est globalement très sûr, avec quelques spécificités à connaître pour les voyageuses.",
    descLongue: "Les wagons 'réservés aux femmes' (women-only cars) existent aux heures de pointe dans plusieurs grandes villes pour éviter le chikan (harcèlement dans les transports).\nLe Japon est classé parmi les pays les plus sûrs au monde pour marcher seule le soir.\nEn cas de problème, les kōban (petits postes de police de quartier) sont présents partout et très réactifs.",
    img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200&q=80" },
  { id: "sante-japon", categorie: "sante", titre: "Santé et pharmacies au Japon", sousTitre: "Assurance, médicaments et urgences",
    desc: "Ce qu'il faut savoir avant de partir côté santé, pharmacies et numéros d'urgence.",
    descLongue: "Numéro d'urgence médicale : 119 (pompiers/ambulance), police : 110.\nPrends une assurance voyage avant de partir : les soins peuvent être coûteux sans couverture.\nCertains médicaments courants en Europe (dont certains contenant de la pseudoéphédrine) sont interdits au Japon : vérifie avant de faire ta valise.\nLes pharmacies (drug store) vendent aussi cosmétiques et hygiène, reconnaissables à leur enseigne verte.",
    img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80" },

  // ============== BONS PLANS & TRANSPORTS : CATÉGORIES COMPLÉTÉES ==============
  { id: "pocket-wifi", categorie: "internet", titre: "Rester connecté au Japon", sousTitre: "Pocket wifi, eSIM ou carte SIM",
    desc: "Comparatif des solutions pour avoir internet sur soi pendant tout le séjour.",
    descLongue: "Pocket wifi : à réserver en ligne, récupérable à l'aéroport, partageable entre plusieurs personnes, environ 5-8€/jour.\neSIM (ex : Airalo, Ubigi) : installation avant le départ, aucune carte physique à gérer, souvent le meilleur rapport qualité-prix pour un voyageur seul.\nCarte SIM physique : à acheter en konbini ou boutique à l'arrivée, formalités parfois plus longues.",
    img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1200&q=80" },
  { id: "budget-japon", categorie: "budget", titre: "Budget moyen d'un voyage au Japon", sousTitre: "Combien prévoir par jour",
    desc: "Une fourchette réaliste de budget quotidien selon ton style de voyage.",
    descLongue: "Petit budget (backpacker) : environ 6 000-8 000 yens/jour (logement partagé, konbini, transports en commun).\nBudget moyen : 12 000-18 000 yens/jour (hôtel business, restaurants, quelques activités payantes).\nConfort : 25 000 yens/jour et plus (ryokan, restaurants gastronomiques, JR Pass, activités premium).\nPense à prévoir une réserve pour les souvenirs et les distributeurs automatiques (les 7-Eleven acceptent les cartes étrangères).",
    img: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1200&q=80" },
  { id: "itineraire-type", categorie: "itineraires", titre: "Itinéraire type 2 semaines", sousTitre: "Tokyo, Kyoto, Osaka en 14 jours",
    desc: "Une trame classique et éprouvée pour un premier voyage au Japon.",
    descLongue: "Jours 1-5 : Tokyo (Shibuya, Shinjuku, Asakusa, Akihabara, excursion à Nikko ou Kamakura).\nJours 6-9 : Kyoto (temples, Fushimi Inari, Arashiyama, geishas à Gion).\nJours 10-11 : Nara (cerfs sacrés) et Osaka (street food, Dotonbori).\nJours 12-14 : Himeji ou Hiroshima, puis retour vers Tokyo en Shinkansen.\nUtilise cette page comme base et adapte-la avec l'outil Itinéraire 90 Jours du site.",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80" },
  { id: "street-food-japon", categorie: "cuisine", titre: "Street food incontournable", sousTitre: "Que manger sur le pouce au Japon",
    desc: "Les spécialités de rue à goûter absolument, ville par ville.",
    descLongue: "Takoyaki (boulettes de poulpe) et okonomiyaki : spécialités d'Osaka, la capitale de la street food.\nTaiyaki : gâteau en forme de poisson fourré à la pâte de haricot rouge ou à la crème.\nYakitori : brochettes de poulet grillées, parfaites avec une bière dans une izakaya.\nKonbini (Lawson, 7-Eleven, FamilyMart) : onigiri, sandwichs et desserts de qualité surprenante à petit prix, ouverts 24h/24.",
    img: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?auto=format&fit=crop&w=1200&q=80" },
  { id: "shopping-japon", categorie: "shopping", titre: "Shopping et souvenirs", sousTitre: "Où acheter et détaxe",
    desc: "Les meilleurs spots shopping et comment récupérer la TVA en tant que touriste.",
    descLongue: "Detax (tax-free) : présente ton passeport en caisse dans les magasins affichant 'Tax-Free' pour ne pas payer la TVA (10%), à partir d'un montant minimum d'achat.\nDon Quijote : grande chaîne ouverte tard, tout à petit prix (cosmétiques, snacks, gadgets).\nDaiso (magasins à 100 yens) : souvenirs sympas et pas chers.\nMarché de Nishiki à Kyoto ou Ameyoko à Tokyo pour une ambiance plus locale.",
    img: "https://images.unsplash.com/photo-1555529771-122e5d9f2341?auto=format&fit=crop&w=1200&q=80" },
  { id: "saisons-japon", categorie: "saisons", titre: "Quelle saison choisir ?", sousTitre: "Sakura, été, momiji ou neige",
    desc: "Avantages et inconvénients de chaque saison pour visiter le Japon.",
    descLongue: "Printemps (fin mars-début avril) : floraison des cerisiers (sakura), magnifique mais très touristique et prix élevés.\nÉté (juin-août) : chaud et humide, saison des matsuri (festivals) et feux d'artifice, mais aussi des typhons.\nAutomne (novembre) : momiji (feuilles rouges), climat agréable, une des meilleures périodes.\nHiver (décembre-février) : idéal pour les onsens enneigés et le ski dans les Alpes japonaises, moins de touristes.",
    img: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1200&q=80" },
  { id: "decalage-horaire", categorie: "horaire", titre: "Décalage horaire et jetlag", sousTitre: "S'adapter à l'heure japonaise",
    desc: "Le Japon a 7 à 9h d'avance sur la France selon la saison : comment limiter le jetlag.",
    descLongue: "Le Japon n'applique pas le changement d'heure : +8h avec la France en hiver, +7h en été.\nÀ l'arrivée, expose-toi à la lumière du jour et évite les siestes de plus de 20-30 minutes le premier jour.\nAu retour, le décalage est souvent plus difficile à digérer qu'à l'aller : prévois une journée de battement avant de reprendre le travail.",
    img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80" },
  { id: "bagages-japon", categorie: "bagages", titre: "Que mettre dans sa valise", sousTitre: "Check-list bagages pour le Japon",
    desc: "Les indispensables à ne pas oublier selon la saison de ton voyage.",
    descLongue: "Adaptateur électrique type A (comme aux USA), le Japon fonctionne en 100V.\nChaussures faciles à enlever/remettre (on se déchausse souvent : temples, restaurants, logements).\nUn petit sac banane ou sac à dos pour les balades, les Japonais ont peu de poubelles publiques donc prévois un sac pour tes déchets.\nEn hiver : petites bouillottes chauffantes jetables (kairo) vendues partout, très pratiques.",
    img: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=1200&q=80" },
  { id: "fetes-japonaises", categorie: "fetes", titre: "Calendrier des grandes fêtes japonaises", sousTitre: "Matsuri et festivals à ne pas manquer",
    desc: "Les principaux festivals japonais et les meilleures périodes pour les voir.",
    descLongue: "Gion Matsuri (Kyoto, juillet) : l'un des plus grands festivals du Japon avec ses chars processionnels.\nHanami (fin mars-avril) : pique-niques sous les cerisiers en fleurs, plus une ambiance qu'un événement organisé.\nFeux d'artifice (hanabi taikai, juillet-août) : dans presque toutes les grandes villes, souvent avec yukata de rigueur.\nNouvel An japonais (oshogatsu) : le 1er janvier, visite aux temples/sanctuaires (hatsumode), fêtes plus familiales que festives.",
    img: "https://images.unsplash.com/photo-1533580362275-ce7fa0ed69c9?auto=format&fit=crop&w=1200&q=80" },
  { id: "cours-yen", categorie: "yen", titre: "Comprendre le cours du yen", sousTitre: "Comment payer et retirer au meilleur taux",
    desc: "Astuces pour ne pas perdre d'argent sur le change et les retraits.",
    descLongue: "Évite de changer des euros en yens en France (taux souvent mauvais) : privilégie les distributeurs sur place (7-Eleven, Japan Post) avec une carte sans frais à l'étranger.\nLe yen a beaucoup baissé ces dernières années, rendant le Japon plus abordable pour les Européens qu'auparavant.\nUne carte de paiement type Wise ou Revolut évite les frais de change à chaque achat.",
    img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=1200&q=80" },

  // ============== DERNIÈRES CATÉGORIES À COMPLÉTER ==============
  { id: "kawaii-culture", categorie: "kawaii", titre: "Comprendre la culture Kawaii", sousTitre: "D'où vient l'obsession japonaise du 'mignon'",
    desc: "Hello Kitty, purikura, mascottes municipales... plongée dans l'esthétique kawaii.",
    descLongue: "Le mot kawaii (可愛い) signifie 'mignon' et imprègne toute la culture populaire japonaise depuis les années 70.\nChaque ville, préfecture, voire administration a sa propre mascotte (yuru-chara), comme Kumamon ou Funassyi.\nLes cabines purikura (photomatons retouchés) sont un incontournable à tester entre amis à Harajuku ou Shibuya.",
    img: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=1200&q=80" },
  { id: "meteo-japon", categorie: "meteo_info", titre: "Météo au Japon selon la saison", sousTitre: "À quoi s'attendre mois par mois",
    desc: "Températures et précipitations moyennes pour bien préparer sa valise.",
    descLongue: "Juin-juillet : saison des pluies (tsuyu), chaud et très humide, surtout dans le sud.\nAoût : le plus chaud, jusqu'à 35°C avec une forte humidité à Tokyo et Osaka.\nHiver (déc-fév) : doux sur le littoral pacifique, très enneigé côté mer du Japon (Hokkaido, Alpes japonaises).\nConsulte la météo japonaise (JMA) une semaine avant le départ plutôt que les prévisions long terme, peu fiables.",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80" },
  { id: "catastrophes-naturelles", categorie: "catastrophes", titre: "Séismes et catastrophes naturelles", sousTitre: "Les bons réflexes à connaître",
    desc: "Le Japon est une zone sismique active : voici comment réagir en cas de secousse.",
    descLongue: "En cas de séisme : protège-toi sous une table solide, éloigne-toi des fenêtres, n'utilise pas les ascenseurs.\nTélécharge l'application Safety Tips (gouvernement japonais) qui envoie des alertes en anglais.\nLes hôtels affichent un plan d'évacuation et le chemin vers le point de rassemblement le plus proche.\nLes typhons (saison : août-octobre) sont annoncés plusieurs jours à l'avance, suis les consignes locales si un voyage coïncide.",
    img: "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?auto=format&fit=crop&w=1200&q=80" },
  { id: "douane-japon", categorie: "douane", titre: "Douane et objets interdits", sousTitre: "Ce que tu ne peux pas importer au Japon",
    desc: "Liste des produits réglementés ou interdits à l'entrée du territoire japonais.",
    descLongue: "Certains médicaments en vente libre en Europe (contenant pseudoéphédrine ou codéine) sont interdits sans autorisation préalable (Yakkan Shoumei).\nLa viande et les produits laitiers frais sont généralement interdits d'importation.\nLimite de devises : déclaration obligatoire au-delà de 1 000 000 yens en liquide.\nLes produits contrefaits sont strictement interdits, y compris pour usage personnel.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80" },
  { id: "voyager-enfants-japon", categorie: "enfants", titre: "Voyager au Japon avec des enfants", sousTitre: "Un pays très adapté aux familles",
    desc: "Le Japon est réputé pour être extrêmement accueillant envers les familles avec enfants.",
    descLongue: "Espaces à langer et salles d'allaitement présents dans la quasi-totalité des grands magasins et gares.\nLes transports en commun sont sûrs et les enfants peuvent souvent y circuler seuls sans inquiétude.\nParcs à thème familiaux : Sanrio Puroland, Legoland Japan, Universal Studios Japan.\nLes ryokan et restaurants sont globalement très tolérants et attentionnés envers les enfants.",
    img: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1200&q=80" }
];

if (typeof module !== "undefined") module.exports = nouvellesEntrees;

// --- nouvelles-entrees-2.js ---
// Deuxième lot de fiches Guide Culturel, écrit pour élargir la couverture régionale et thématique
// (contenu original, pas copié d'un site tiers). Importé par seed.js.
const nouvellesEntrees2 = [

  { id: "sapporo-neige", categorie: "insolite", titre: "Festival de la neige de Sapporo", sousTitre: "Des sculptures de glace géantes en plein Hokkaido",
    desc: "Chaque février, le centre de Sapporo se couvre de sculptures de neige et de glace monumentales.",
    descLongue: "Le Yuki Matsuri attire plus de 2 millions de visiteurs chaque année autour du parc Odori.\nCertaines sculptures dépassent 15 mètres de haut, réalisées par l'armée japonaise et des équipes internationales.\nLa nuit, les structures sont illuminées de couleurs, créant une ambiance féerique.\nÀ combiner avec une virée dans les sources chaudes de Jozankei, à 1h de route.",
    img: "https://images.unsplash.com/photo-1548813831-6f2c9d0f6d47?auto=format&fit=crop&w=1200&q=80", lat: 43.0618, lng: 141.3545 },

  { id: "shirakami-sanchi", categorie: "insolite", titre: "Forêt vierge de Shirakami-Sanchi", sousTitre: "Le dernier hêtraie primaire du Japon",
    desc: "Classée à l'UNESCO, cette forêt de Tohoku n'a jamais été exploitée par l'homme.",
    descLongue: "S'étend sur les préfectures d'Aomori et Akita, accessible par plusieurs sentiers de randonnée balisés.\nLe lac turquoise Aoike, à l'eau d'une transparence saisissante, en est le point culminant photographique.\nMeilleure période : mai-octobre, la forêt étant fermée l'hiver à cause de la neige.",
    img: "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?auto=format&fit=crop&w=1200&q=80", lat: 40.5167, lng: 140.1667 },

  { id: "kumamoto-jo", categorie: "histoire", titre: "Château de Kumamoto", sousTitre: "L'une des forteresses les plus impressionnantes du Japon",
    desc: "Reconstruit après le séisme de 2016, ce château de Kyushu est réputé pour ses murs incurvés infranchissables.",
    descLongue: "Construit au début du XVIIe siècle par le seigneur Kato Kiyomasa, maître de l'architecture défensive.\nSes murs en pierre courbés (musha-gaeshi) étaient conçus pour empêcher les assaillants de grimper.\nGravement endommagé par le séisme de 2016, sa restauration complète est prévue pour 2052 mais le donjon principal est déjà visitable.",
    img: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?auto=format&fit=crop&w=1200&q=80", lat: 32.8065, lng: 130.7055 },

  { id: "yakushima", categorie: "histoire", titre: "Île de Yakushima", sousTitre: "L'île aux cèdres millénaires qui a inspiré Miyazaki",
    desc: "Cette île subtropicale de Kyushu abrite des cèdres (yakusugi) vieux de plus de 1000 ans.",
    descLongue: "Le cèdre Jomon Sugi, le plus vieux et le plus célèbre, serait âgé de 2000 à 7000 ans selon les estimations.\nLa forêt moussue de Shiratani Unsuikyo aurait directement inspiré les décors de Princesse Mononoké.\nÎle classée à l'UNESCO, accessible en ferry ou avion depuis Kagoshima.",
    img: "https://images.unsplash.com/photo-1601823984263-b87b59798b70?auto=format&fit=crop&w=1200&q=80", lat: 30.3856, lng: 130.5300 },

  { id: "izumo-taisha", categorie: "religion", titre: "Sanctuaire d'Izumo Taisha", sousTitre: "Le sanctuaire des dieux et de l'amour",
    desc: "L'un des plus anciens et importants sanctuaires shinto du Japon, dédié au dieu du mariage.",
    descLongue: "Selon la légende, tous les dieux shinto se réunissent ici chaque année au 10e mois lunaire pour décider des unions à venir.\nCe mois est d'ailleurs appelé 'mois sans dieux' (Kannazuki) partout ailleurs au Japon, mais 'mois avec dieux' (Kamiarizuki) à Izumo.\nLa corde shimenawa de l'entrée principale est l'une des plus imposantes du pays, plusieurs tonnes de paille tressée.",
    img: "https://images.unsplash.com/photo-1610901157620-340856d0a50f?auto=format&fit=crop&w=1200&q=80", lat: 35.4018, lng: 132.6853 },

  { id: "koyasan-nuit", categorie: "religion", titre: "Dormir dans un temple à Koyasan", sousTitre: "L'expérience shukubo (hébergement monastique)",
    desc: "Passer la nuit dans un temple bouddhiste, repas végétarien et méditation matinale inclus.",
    descLongue: "Plus de 50 temples de Koyasan proposent des chambres pour les visiteurs (shukubo), une expérience unique et abordable (souvent 8000-15000 yens avec repas).\nLe dîner shojin ryori est une cuisine bouddhiste végétarienne raffinée, sans ail ni oignon.\nParticipation possible à la cérémonie du matin (goma) avec le feu rituel, vers 6h.",
    img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200&q=80", lat: 34.2128, lng: 135.5864 },

  { id: "yokai-mizuki", categorie: "contes", titre: "Les yokai et Shigeru Mizuki", sousTitre: "Les créatures surnaturelles du folklore japonais",
    desc: "Fantômes, esprits et monstres peuplent depuis des siècles l'imaginaire populaire japonais.",
    descLongue: "Le kappa (esprit aquatique facétieux), le tengu (esprit ailé des montagnes) et le kitsune (renard à plusieurs queues) sont parmi les plus connus.\nLe mangaka Shigeru Mizuki a popularisé ces créatures au XXe siècle avec GeGeGe no Kitaro.\nLa rue commerçante Mizuki Shigeru Road à Sakaiminato (sa ville natale) compte plus de 170 statues de bronze de yokai.",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80" },

  { id: "momotaro", categorie: "contes", titre: "Momotaro, l'enfant né d'une pêche", sousTitre: "Le conte japonais le plus célèbre",
    desc: "L'histoire d'un enfant surgi d'une pêche géante qui part combattre des démons avec ses amis animaux.",
    descLongue: "Trouvé dans une pêche par un couple de paysans âgés sans enfant, Momotaro grandit et part libérer un village attaqué par des oni (démons).\nEn chemin, il se lie d'amitié avec un chien, un singe et un faisan en leur offrant des boulettes de mil (kibi dango).\nLa ville d'Okayama revendique être le berceau de la légende et vend ses propres kibi dango en souvenir.",
    img: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1200&q=80" },

  { id: "ukiyo-e", categorie: "arts", titre: "L'estampe ukiyo-e", sousTitre: "Hokusai, Hiroshige et l'art du monde flottant",
    desc: "Cet art de la gravure sur bois a immortalisé le Japon d'Edo et influencé les impressionnistes européens.",
    descLongue: "'La Grande Vague de Kanagawa' d'Hokusai est l'estampe japonaise la plus reproduite au monde.\nLe terme ukiyo-e signifie 'images du monde flottant', en référence à la vie éphémère et aux plaisirs urbains d'Edo (Tokyo).\nLe musée Sumida Hokusai à Tokyo et le musée Ukiyo-e d'Hiroshige à Nagoya conservent des collections majeures.",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80" },

  { id: "ikebana-shodo", categorie: "arts", titre: "Ikebana et shodo", sousTitre: "L'art floral et la calligraphie japonaise",
    desc: "Deux arts traditionnels que le visiteur peut pratiquer lors d'ateliers dans tout le Japon.",
    descLongue: "L'ikebana (art floral) suit des règles précises d'équilibre entre ciel, terre et humanité (école Ikenobo, la plus ancienne, fondée au XVe siècle).\nLe shodo (calligraphie) s'apprend avec un pinceau, de l'encre de Chine (sumi) et du papier washi.\nDe nombreux temples et centres culturels à Kyoto proposent des ateliers d'initiation en anglais pour touristes.",
    img: "https://images.unsplash.com/photo-1493935651239-c3b8d31b6f24?auto=format&fit=crop&w=1200&q=80" },

  { id: "tanuki-statue", categorie: "animaux", titre: "Le tanuki, animal porte-bonheur", sousTitre: "Ces statues à l'entrée des restaurants et boutiques",
    desc: "Le chien viverrin (tanuki) est une figure comique et bienveillante très présente dans la culture populaire.",
    descLongue: "Reconnaissable à son gros ventre, son chapeau de paille et... ses attributs surdimensionnés, symbole de prospérité.\nOn trouve ses statues à l'entrée de nombreux izakayas et onsens, censées porter chance aux commerçants.\nLe film Pompoko du Studio Ghibli (1994) met en scène une communauté de tanuki luttant contre l'urbanisation.",
    img: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=1200&q=80" },

  { id: "chats-tashirojima", categorie: "animaux", titre: "Tashirojima, l'île aux chats", sousTitre: "Plus de chats que d'habitants",
    desc: "Sur cette petite île de la préfecture de Miyagi, les chats sont considérés comme des porte-bonheur sacrés.",
    descLongue: "La légende locale veut que nourrir les chats attire la fortune, tandis que leur faire du mal porte malheur.\nLes chiens y sont interdits pour ne pas effrayer les félins.\nAccessible en ferry depuis le port d'Ishinomaki, l'île compte aujourd'hui plus de chats que d'habitants humains.",
    img: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&w=1200&q=80", lat: 38.2967, lng: 141.4147 },

  { id: "cosplay-culture", categorie: "kawaii", titre: "La culture cosplay au Japon", sousTitre: "D'Akihabara au Comiket",
    desc: "Le Japon est le berceau mondial du cosplay, où se déguiser en personnage de fiction est un art à part entière.",
    descLongue: "Le Comiket (Comic Market), deux fois par an à Tokyo, est le plus grand rassemblement au monde de fans et cosplayeurs amateurs.\nÀ Akihabara, des studios de location de costumes et de photographie permettent aux touristes de s'essayer au cosplay le temps d'une après-midi.\nLe respect du personnage incarné (jusque dans les moindres détails) est une valeur centrale de cette culture.",
    img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80" },

  { id: "gundam-odaiba", categorie: "anime", titre: "Le Gundam grandeur nature d'Odaiba", sousTitre: "Un robot géant de 18 mètres face à la baie de Tokyo",
    desc: "Statue animée impressionnante rendant hommage à la série culte Mobile Suit Gundam.",
    descLongue: "Le RX-78-2 Gundam mesure 18 mètres et pèse environ 25 tonnes, avec des animations lumineuses et sonores à heures fixes.\nÀ proximité, le Gundam Base Tokyo propose une exposition complète sur les 40 ans de la franchise et une boutique de figurines exclusives.\nGratuit à voir de l'extérieur, dans le centre commercial DiverCity Tokyo Plaza.",
    img: "https://images.unsplash.com/photo-1560717845-968823efbee1?auto=format&fit=crop&w=1200&q=80", lat: 35.6252, lng: 139.7754 },

  { id: "kurosawa-cinema", categorie: "films", titre: "Akira Kurosawa et le cinéma japonais classique", sousTitre: "Le réalisateur qui a influencé Hollywood",
    desc: "Les Sept Samouraïs, Rashomon, Ran... l'œuvre de Kurosawa a marqué le cinéma mondial.",
    descLongue: "'Les Sept Samouraïs' (1954) a directement inspiré le western américain 'Les Sept Mercenaires'.\n'Rashomon' (1950) a donné son nom à un effet narratif désormais universel : raconter un même événement selon plusieurs points de vue contradictoires.\nGeorge Lucas a cité Kurosawa comme influence majeure pour Star Wars, notamment pour 'La Forteresse Cachée'.",
    img: "https://images.unsplash.com/photo-1489599162946-a7ab5c0b7b0e?auto=format&fit=crop&w=1200&q=80" },

  { id: "golden-gai", categorie: "sortir", titre: "Golden Gai à Shinjuku", sousTitre: "Un dédale de plus de 200 micro-bars",
    desc: "Ce quartier labyrinthique compte des bars minuscules (parfois 5 places assises) nichés dans de petites ruelles.",
    descLongue: "Chaque bar a sa propre ambiance et thématique, du rock des années 80 au cinéma d'horreur.\nCertains établissements affichent 'Japanese only' ou demandent un droit d'entrée (charge fee, 500-2000 yens) : renseigne-toi avant d'entrer.\nQuartier historiquement lié à la bohème artistique et littéraire de Tokyo depuis les années 1950.",
    img: "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=1200&q=80", lat: 35.6947, lng: 139.7038 },

  { id: "j-pop-idols", categorie: "musique", titre: "La culture idole (J-pop)", sousTitre: "AKB48, Johnny's et le star-system japonais",
    desc: "Le système des idoles japonaises est un phénomène culturel et économique à part entière.",
    descLongue: "AKB48 a révolutionné le concept avec son propre théâtre à Akihabara où les fans peuvent voir des concerts quotidiens.\nLes 'handshake events' permettent aux fans de rencontrer brièvement leurs idoles, un modèle économique unique au monde.\nLe concept repose sur le fait de suivre la progression et 'l'apprentissage' des idoles plutôt que sur une perfection immédiate.",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80" }
];

if (typeof module !== "undefined") module.exports = nouvellesEntrees2;

// --- nouvelles-entrees-3.js ---
// Troisième lot, importé par seed.js en plus des deux précédents.
const nouvellesEntrees3 = [

  // ============== RELIGION : GRANDS CLASSIQUES ==============
  { id: "senso-ji", categorie: "religion", titre: "Senso-ji", sousTitre: "Le plus ancien temple de Tokyo",
    desc: "Fondé en 645, ce temple bouddhiste d'Asakusa est précédé de la célèbre porte Kaminarimon et de sa lanterne géante.",
    descLongue: "L'avenue Nakamise-dori qui mène au temple regorge de boutiques de souvenirs et de street food traditionnelle.\nLe tirage de fortune (omikuji) à l'entrée est un rituel populaire, même chez les Japonais non pratiquants.\nÀ visiter idéalement tôt le matin pour éviter la foule.",
    img: "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?auto=format&fit=crop&w=1200&q=80", lat: 35.7148, lng: 139.7967 },
  { id: "meiji-jingu", categorie: "religion", titre: "Meiji Jingu", sousTitre: "Le sanctuaire au cœur de la forêt de Tokyo",
    desc: "Dédié à l'empereur Meiji, ce sanctuaire shinto est entouré d'une forêt artificielle de 100 000 arbres en plein Tokyo.",
    descLongue: "Situé entre Harajuku et Shibuya, c'est un havre de calme surprenant à quelques minutes des zones les plus animées de la ville.\nOn y célèbre souvent des mariages traditionnels shinto le week-end, visibles par les visiteurs.\nLe mur de tonneaux de saké offerts est un des spots photo les plus connus du sanctuaire.",
    img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80", lat: 35.6764, lng: 139.6993 },
  { id: "todai-ji", categorie: "religion", titre: "Todai-ji", sousTitre: "Le plus grand Bouddha en bronze du Japon",
    desc: "Ce temple de Nara abrite le Daibutsu, une statue de Bouddha de 15 mètres de haut, dans le plus grand bâtiment en bois du monde.",
    descLongue: "Le bâtiment principal (Daibutsuden) a été reconstruit plusieurs fois au fil des siècles suite à des incendies.\nUn pilier du temple possède un trou à sa base : le traverser porterait chance (mais reste réservé aux plus fins gabarits !).\nÀ combiner avec la visite du parc de Nara et ses cerfs, à quelques minutes à pied.",
    img: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?auto=format&fit=crop&w=1200&q=80", lat: 34.6889, lng: 135.8398 },

  // ============== HISTOIRE ==============
  { id: "chateau-osaka", categorie: "histoire", titre: "Château d'Osaka", sousTitre: "Symbole de la réunification du Japon",
    desc: "Construit par Toyotomi Hideyoshi au XVIe siècle, ce château a joué un rôle central dans l'unification du pays.",
    descLongue: "Le donjon actuel est une reconstruction en béton de 1931 qui abrite un musée sur son histoire, avec vue panoramique au sommet.\nLe parc environnant est un des meilleurs spots de hanami (floraison des cerisiers) d'Osaka.\nÀ combiner avec une balade dans le quartier animé de Dotonbori, à 15 minutes en métro.",
    img: "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1200&q=80", lat: 34.6873, lng: 135.5262 },

  // ============== CONTES ET LÉGENDES ==============
  { id: "kappa-legende", categorie: "contes", titre: "Le Kappa", sousTitre: "La créature aquatique facétieuse du folklore",
    desc: "Mi-tortue, mi-humanoïde, le Kappa hante rivières et étangs dans les légendes japonaises depuis des siècles.",
    descLongue: "Selon la légende, le Kappa aurait une cavité remplie d'eau sur le crâne : la lui faire renverser (par une révérence) le rendrait inoffensif.\nRéputé gourmand de concombres, d'où le nom du maki 'kappamaki' (maki au concombre).\nDe nombreuses villes japonaises, comme Tono dans le Tohoku, ont fait du Kappa un symbole touristique local.",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80" },
  { id: "kitsune-legende", categorie: "contes", titre: "Le Kitsune", sousTitre: "Le renard aux pouvoirs surnaturels",
    desc: "Messager du dieu Inari, le renard occupe une place particulière entre légende et croyance shinto encore vivace aujourd'hui.",
    descLongue: "Un kitsune gagnerait une queue supplémentaire (jusqu'à neuf) à mesure qu'il vieillit et gagne en sagesse et en pouvoirs.\nOn le retrouve sous forme de statues à l'entrée des sanctuaires Inari, comme à Fushimi Inari Taisha.\nDans le folklore, il peut se transformer en humain, souvent pour tester la bonté des voyageurs.",
    img: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=1200&q=80" },

  // ============== ARTS JAPONAIS ==============
  { id: "sumo", categorie: "arts", titre: "Le Sumo", sousTitre: "Le sport-rituel national japonais",
    desc: "Bien plus qu'un sport de combat, le sumo est un art ritualisé aux origines shinto vieilles de plus de 1500 ans.",
    descLongue: "Les tournois officiels (basho) ont lieu six fois par an, dont trois à Tokyo au Ryogoku Kokugikan.\nAvant chaque combat, les lutteurs (rikishi) accomplissent des rituels de purification en jetant du sel dans l'arène.\nAssister à un entraînement matinal (asageiko) dans une écurie de sumo est une expérience plus accessible et authentique qu'un tournoi.",
    img: "https://images.unsplash.com/photo-1624253424460-1b7f2e5c2fdb?auto=format&fit=crop&w=1200&q=80" },

  // ============== INSOLITE / KAWAII ==============
  { id: "kabukicho-nuit", categorie: "insolite", titre: "Spectacles insolites de Shinjuku", sousTitre: "Le Japon dans toute son excentricité",
    desc: "Entre bars à thème et karaokés géants, le quartier de Kabukicho concentre les expériences nocturnes les plus décalées du pays.",
    descLongue: "Le quartier regorge de bars et restaurants à thème, où le spectacle prime autant que l'assiette.\nLes karaokés (comme Big Echo) proposent des salles privatives ouvertes 24h/24, une institution sociale au Japon.\nÀ réserver à l'avance en haute saison, ces expériences affichent complet rapidement.",
    img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80" },
  { id: "chat-cafe", categorie: "kawaii", titre: "Cafés à thème animalier", sousTitre: "Chats, hiboux, hérissons... le concept venu du Japon",
    desc: "Les cafés à animaux sont nés au Japon dans les années 2000, pensés pour les citadins qui n'ont pas la place d'avoir un animal.",
    descLongue: "Le Cat Café MoCHA (plusieurs villes) est l'une des chaînes les plus réputées, avec des chats habitués au contact humain.\nDes concepts plus insolites existent aussi : hibou (owl café), hérisson, voire capybara.\nCompte environ 1200-1800 yens pour 30 minutes, boisson souvent incluse.",
    img: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=1200&q=80" },

  // ============== ANIME ==============
  { id: "conan-yura", categorie: "anime", titre: "Détective Conan à Yura", sousTitre: "Le village natal du célèbre détective en herbe",
    desc: "Le petit village de Yura, dans la préfecture de Tottori, célèbre son enfant du pays : le mangaka Gosho Aoyama.",
    descLongue: "Un petit musée gratuit et de nombreuses statues de bronze représentant les personnages parsèment les rues du village.\nLa gare elle-même est décorée sur le thème de Conan, un incontournable pour les fans même en simple étape.",
    img: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=80" },

  // ============== MUSIQUE / FESTIVALS ==============
  { id: "fuji-rock", categorie: "musique", titre: "Fuji Rock Festival", sousTitre: "Le plus grand festival de musique en plein air du Japon",
    desc: "Chaque été, ce festival réunit artistes japonais et internationaux dans un cadre montagneux spectaculaire à Naeba.",
    descLongue: "Créé en 1997, c'est l'un des plus anciens et des plus respectés festivals d'Asie, avec une programmation très éclectique (rock, électro, folk).\nL'ambiance reste réputée pour son organisation impeccable et son respect de l'environnement, typiquement japonais.",
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80" }
];

if (typeof module !== "undefined") module.exports = nouvellesEntrees3;

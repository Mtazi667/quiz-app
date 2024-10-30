// questions.js
const questions = [
  {
    id: 1,
    question: "Que signifie les trois “M” de la compagnie 3M?",
    options: {
      a: "Mississippi Mining & Manufacturing",
      b: "Montana Mining & Manufacturing",
      c: "Minnesota Mining & Manufacturing",
      d: "Michigan Mining & Manufacturing"
    },
    answer: "c",
  },
  {
    id: 2,
    question: "Panta rhei provient de quelle langue?",
    options: {
      a: "Latin",
      b: "Grec ancien",
      c: "Tibétain",
      d: "Hébreux"
    },
    answer: "b",
  },
  {
    id: 3,
    question: "Dans plus de combien de pays la pièce Panta rhei a-t-elle été jouée?",
    options: {
      a: "Plus de 30",
      b: "Plus de 40",
      c: "Plus de 20",
      d: "Plus de 50"
    },
    answer: "b",
  },
  {
    id: 4,
    question: "Quelle est la bonne réponse sachant que la bonne réponse est l'option C?",
    options: {
      a: "L'option B",
      b: "L'option C",
      c: "L'option A",
      d: "Aucune de ces réponses"
    },
    answer: "b",
  },
  {
    id: 5,
    question: "Qui a créé les marionnettes du Muppet Show?",
    options: {
      a: "Jim Murphy",
      b: "Jim Henson",
      c: "Jim Davis",
      d: "Jim Harris"
    },
    answer: "b",
  },
  {
    id: 6,
    question: "Quel est le métier d’Alex Osborn?",
    options: {
      a: "Psychanalyste",
      b: "Professeur",
      c: "Sociologue",
      d: "Publicitaire"
    },
    answer: "d",
  },
  {
    id: 7,
    question: "Si un arbre tombe dans une forêt et que personne n'est là pour l'entendre, quel bruit fait-il?",
    options: {
      a: "Un bruit sourd",
      b: "Un 'boom'",
      c: "Il ne fait aucun bruit",
      d: "Ça dépend si quelqu'un l’a enregistré"
    },
    answer: "c",
  },
  {
    id: 8,
    question: `Ces signaux électrochimiques voyagent à travers de denses réseaux de cellules, appelés…`,
    options: {
      a: "Artère",
      b: "Neurones",
      c: "Vertèbre",
      d: "Capillaire"
    },
    answer: "b",
  },
  {
    id: 9,
    question: "QSi le matin est avant l’après-midi, alors l’après-midi est...",
    options: {
      a: "Avant le soir",
      b: "Après le matin mais avant le soir",
      c: "Entre le matin et le soir",
      d: "Inutile, car tout le monde dort l’après-midi"
    },
    answer: "c",
  },
  {
    id: 10,
    question: "Quel est le plus haut degré d’autonomie de la motivation intrinsèque?",
    options: {
      a: "Théorie du renforcement social",
      b: "Théorie de l’autodétermination",
      c: "Théorie du conditionnement opérant",
      d: "Théorie de la motivation extrinsèque"
    },
    answer: "b",
  },
  {
    id: 11,
    question: "Quel type de motivation n’existe pas?",
    options: {
      a: "Régulation introjectée",
      b: "Régulation intégrée",
      c: "Régulation harmonisée",
      d: "Régulation identifiée"
    },
    answer: "c",
  },
  {
    id: 12,
    question: "Quel architecte a inspiré Jacques Lessard pour les Cycles Repère?",
    options: {
      a: "Laurence Halprin",
      b: "Frank Lloyd Wright",
      c: "Zaha Hadid",
      d: "Renzo Piano"
    },
    answer: "a",
  },
  {
    id: 13,
    question: "Quel est le moyen le plus sûr de ne jamais échouer?",
    options: {
      a: "Ne jamais essayer",
      b: "Demander à ChatGPT",
      c: "Essayer une seule fois et abandonner",
      d: "Espérer que quelqu'un d'autre fasse le travail"
    },
    answer: "a",
  },
  {
    id: 14,
    question: "Dans les Cycles Repère, que représente 'Partition'?",
    options: {
      a: "Organisation des ressources",
      b: "Mise en scène finale",
      c: "Exploration des émotions",
      d: "Évaluation des performances"
    },
    answer: "c",
  },
  {
    id: 15,
    question: "Qu’est-ce qui peut être une ressource?",
    options: {
      a: "Un texte",
      b: "Un objet",
      c: "Une émotion",
      d: "Toutes les réponses sont correctes"
    },
    answer: "d",
  },
  {
    id: 16,
    question: "Quelle est la finalité de la représentation dans les Cycles Repère?",
    options: {
      a: "Organiser les participants",
      b: "Présenter devant un public",
      c: "Évaluer le processus",
      d: "Réutiliser la ressource"
    },
    answer: "b",
  },
  {
    id: 17,
    question: "Que signifie 'R.E.P.R.E.'?",
    options: {
      a: "Ressource, Performance, Évaluation, Respect",
      b: "Ressource, Partition, Évaluation, Représentation",
      c: "Ressource, Évaluation, Performance, Représentation",
      d: "Réflexion, Écriture, Pratique, Représentation"
    },
    answer: "b",
  },
  {
    id: 18,
    question: "Comment le cerveau capte-t-il la réalité?",
    options: {
      a: "Grâce à des réseaux de neurones",
      b: "Par une connexion avec l'environnement",
      c: "Avec des signaux optiques",
      d: "Par l'entrée directe de la lumière"
    },
    answer: "a",
  },
  {
    id: 19,
    question: "Qu’est-ce qui influence directement notre attention?",
    options: {
      a: "Notre environnement",
      b: "Nos émotions",
      c: "Nos souvenirs",
      d: "Le bruit ambiant"
    },
    answer: "b",
  },
  {
    id: 20,
    question: "Quel est le rôle de l’évaluation dans les Cycles Repère?",
    options: {
      a: "Créer une partition",
      b: "Organiser les ressources",
      c: "Prendre des décisions créatives",
      d: "Attribuer une note"
    },
    answer: "c",
  },
  {
    id: 21,
    question: "Comment appelle-t-on les signaux dans le cerveau?",
    options: {
      a: "Signaux acoustiques",
      b: "Signaux mécaniques",
      c: "Signaux optiques",
      d: "Signaux électrochimiques"
    },
    answer: "d",
  },
  {
    id: 22,
    question: "Quand intervient l’évaluation dans les Cycles Repère?",
    options: {
      a: "Uniquement à la fin",
      b: "Après chaque étape",
      c: "À tout moment sauf pendant la partition exploratoire",
      d: "Au début du processus"
    },
    answer: "c",
  },
  {
    id: 23,
    question: "Que favorise la partition exploratoire?",
    options: {
      a: "La critique des idées",
      b: "L’écoute des émotions",
      c: "La planification du projet",
      d: "La mise en scène"
    },
    answer: "b",
  },
  {
    id: 24,
    question: "Quel est l’axiome de base de la représentation?",
    options: {
      a: "Faire c'est connaître",
      b: "Choisir c'est créer",
      c: "Tout est une ressource",
      d: "Évaluer, c'est progresser"
    },
    answer: "a",
  },
  {
    id: 25,
    question: "Que peut inclure une ressource?",
    options: {
      a: "Seulement des objets physiques",
      b: "Le temps et le lieu",
      c: "Uniquement des idées",
      d: "Des outils et des contraintes"
    },
    answer: "b",
  },
  {
    id: 26,
    question: "Pourquoi le cerveau semble-t-il fonctionner sans effort?",
    options: {
      a: "Parce qu'il ne traite qu'une partie de la réalité",
      b: "Parce qu'il utilise des neurones automatiques",
      c: "Parce qu'il reçoit directement la lumière et le son",
      d: "Parce qu'il filtre les informations rapidement"
    },
    answer: "d",
  },
  {
    id: 27,
    question: "Quelle structure est responsable des émotions?",
    options: {
      a: "Le système limbique",
      b: "Le cortex moteur",
      c: "Le lobe occipital",
      d: "Le cervelet"
    },
    answer: "a",
  },
  {
    id: 28,
    question: "Comment créer un espace de mise en commun?",
    options: {
      a: "En rejetant les idées folles",
      b: "En limitant la participation",
      c: "En définissant des règles strictes",
      d: "En favorisant l’ouverture et l’écoute"
    },
    answer: "d",
  },
  {
    id: 29,
    question: "Quel est le rôle des interneurones?",
    options: {
      a: "Moduler la boucle sensori-motrice",
      b: "Filtrer les souvenirs",
      c: "Générer des émotions",
      d: "Transporter les signaux optiques"
    },
    answer: "a",
  },
  {
    id: 30,
    question: "Comment appelle-t-on les cycles adaptés par Lessard?",
    options: {
      a: "RSVP Cycles",
      b: "Cycles Repère",
      c: "Cycles Reflex",
      d: "Cycles d’Exploration"
    },
    answer: "b",
  },
  {
    id: 31,
    question: "À quoi sert l’attention dans le cerveau?",
    options: {
      a: "À détecter des informations importantes",
      b: "À faire le tri des émotions",
      c: "À déclencher des actions rapides",
      d: "Toutes les réponses sont correctes"
    },
    answer: "d",
  },
  {
    id: 32,
    question: "Qu’est-ce qui peut influencer les performances créatives?",
    options: {
      a: "L’environnement",
      b: "Les outils disponibles",
      c: "Les objectifs fixés",
      d: "Toutes les réponses ci-dessus"
    },
    answer: "d",
  },
  {
    id: 33,
    question: "Comment se déroule une partition exploratoire?",
    options: {
      a: "Avec des improvisations et des jeux",
      b: "Avec une planification stricte",
      c: "Avec une évaluation constante",
      d: "Avec des tests de performance"
    },
    answer: "a",
  },
  {
    id: 34,
    question: "Quel est l’élément fondamental des Cycles Repère?",
    options: {
      a: "La ressource",
      b: "L’évaluation",
      c: "La représentation",
      d: "La partition"
    },
    answer: "a",
  }
];

export default questions;

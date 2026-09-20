/**
 * Tout le copywriting du site, typé et centralisé.
 * Rédigé à partir des informations publiques de la page Facebook d'Honoré Sodokin :
 * bio, couverture « Toi seul / Avec moi en 90 jours chrono », publications et coordonnées.
 */

export type Pain = { quote: string };

export const pains: Pain[] = [
  {
    quote:
      "J'ai des idées plein la tête. Aucune n'a jamais dépassé le stade du cahier.",
  },
  {
    quote:
      "J'ai déposé un dossier à la banque il y a trois mois. J'attends toujours une réponse.",
  },
  {
    quote:
      "J'ai lancé un truc l'an dernier. Six mois plus tard, c'était fini — et je ne sais même pas pourquoi.",
  },
  {
    quote:
      "Autour de moi, tout le monde attend un emploi. Moi j'attends quoi, exactement ?",
  },
];

export type ComparisonSide = {
  tag: string;
  title: string;
  items: string[];
};

export const before: ComparisonSide = {
  tag: "Avant",
  title: "Tu avances seul, au hasard",
  items: [
    "Des idées en pagaille, aucune validée par un vrai client",
    "Un dossier bancaire qui dort dans un tiroir depuis des mois",
    "Un business qui ne passe pas le cap des six mois",
    "Le mindset de celui qui attend l'opportunité parfaite",
    "Des revenus qui dépendent d'une seule source fragile",
  ],
};

export const after: ComparisonSide = {
  tag: "Après 90 jours",
  title: "Tu avances encadré, dans l'ordre",
  items: [
    "Une idée testée sur le terrain, avec des chiffres en face",
    "Un financement monté sans passer par le crédit bancaire",
    "Un modèle qui tient parce que ses marges ont été calculées",
    "Le mindset de celui qui décide, exécute et corrige vite",
    "Des premiers revenus mesurables et un plan pour les répéter",
  ],
};

export type Pillar = {
  number: string;
  title: string;
  intro: string;
  points: string[];
};

export const pillars: Pillar[] = [
  {
    number: "01",
    title: "Trouver l'idée qui rapporte",
    intro:
      "On arrête de chercher « une bonne idée » et on cherche un marché qui paie déjà. Tu repars avec un projet choisi pour ses marges, pas pour sa mode.",
    points: [
      "Lecture des besoins réels de ton marché local",
      "Filtre de rentabilité : marge, coût d'acquisition, cash",
      "Test terrain avant le moindre investissement lourd",
      "Positionnement qui te distingue de la concurrence",
    ],
  },
  {
    number: "02",
    title: "Financer sans dépendre des banques",
    intro:
      "La banque n'est pas la porte d'entrée de l'entrepreneur africain — c'est la sortie de secours. On construit ton capital autrement, avec ce que tu as déjà.",
    points: [
      "Démarrer petit et faire financer la croissance par le client",
      "Prévente, acomptes et modèles à trésorerie positive",
      "Épargne structurée, tontine, love money encadrée",
      "Associés, partenaires et dossiers qui inspirent confiance",
    ],
  },
  {
    number: "03",
    title: "Bâtir le mindset qui tient",
    intro:
      "La technique fait démarrer. Le mental fait durer. On travaille la tête d'entrepreneur : décision, discipline, rapport à l'argent et à l'échec.",
    points: [
      "Passer du réflexe « emploi » au réflexe « création de valeur »",
      "Décider vite, corriger vite, ne pas s'attacher à ses erreurs",
      "Discipline d'exécution : des rituels, pas de la motivation",
      "Gérer la pression de l'entourage et la peur du regard des autres",
    ],
  },
];

export type Phase = {
  when: string;
  title: string;
  body: string;
  deliverable: string;
};

export const phases: Phase[] = [
  {
    when: "Jours 1 → 15",
    title: "Clarté et diagnostic",
    body: "On met tout à plat : ton profil, tes moyens réels, ton temps, ton réseau, ton marché. On élimine les projets qui ne te correspondent pas et on garde ceux qui peuvent vraiment payer.",
    deliverable: "Une direction unique, choisie et assumée.",
  },
  {
    when: "Jours 16 → 40",
    title: "Validation par le terrain",
    body: "Avant d'investir, on va vérifier que des gens paient. Offre, prix, première version du produit ou du service, premiers échanges clients : les chiffres décident à ta place.",
    deliverable: "Une offre testée et des preuves d'achat.",
  },
  {
    when: "Jours 41 → 70",
    title: "Financement et lancement",
    body: "On monte le capital nécessaire avec les leviers qui ne passent pas par la banque, on structure les coûts, et on lance pour de vrai — avec un modèle dont les marges sont connues.",
    deliverable: "Un business lancé et financé.",
  },
  {
    when: "Jours 71 → 90",
    title: "Traction et discipline",
    body: "On installe les routines qui font durer : suivi des chiffres, acquisition régulière de clients, gestion de la trésorerie, et le mental pour tenir quand l'enthousiasme du départ retombe.",
    deliverable: "Un plan de croissance et des habitudes qui tiennent.",
  },
];

export type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 66, suffix: " 000+", label: "Abonnés accompagnés en ligne" },
  { value: 100, suffix: " %", label: "D'avis recommandant le mentor" },
  { value: 90, suffix: " j", label: "Pour passer de l'idée au lancement" },
  { value: 20, suffix: "-35", label: "La tranche d'âge accompagnée" },
];

export const audienceYes: string[] = [
  "Tu as entre 20 et 35 ans et tu veux entreprendre pour de vrai, pas en discuter.",
  "Tu es prêt à démarrer avec les moyens que tu as aujourd'hui, même modestes.",
  "Tu acceptes qu'on te dise la vérité sur ton projet, même quand elle dérange.",
  "Tu peux dégager du temps chaque semaine pendant trois mois.",
  "Tu veux une méthode et un cadre, pas seulement de la motivation.",
];

export const audienceNo: string[] = [
  "Tu cherches un investisseur qui va financer ton idée à ta place.",
  "Tu attends une recette pour devenir riche sans effort ni discipline.",
  "Tu veux qu'on exécute à ta place pendant que tu observes.",
  "Tu abandonnes au premier « non » d'un client ou d'un proche.",
  "Tu n'es pas prêt à suivre un ordre de priorités qui n'est pas le tien.",
];

/**
 * ⚠️ EXEMPLES DE MISE EN PAGE — à remplacer par de vrais témoignages clients
 * (prénom, activité, ville) avant la mise en ligne, ou à retirer de la page.
 */
export const testimonialsArePlaceholders = true;

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Je tournais en rond avec trois idées depuis deux ans. En quatre semaines, j'en avais une seule, testée, avec mes premiers clients payants.",
    name: "Prénom N.",
    detail: "Activité · Ville",
  },
  {
    quote:
      "J'attendais un crédit qui n'est jamais venu. On a monté mon financement autrement, et j'ai lancé sans m'endetter.",
    name: "Prénom N.",
    detail: "Activité · Ville",
  },
  {
    quote:
      "Ce que j'ai le plus changé, c'est ma tête. Je décide plus vite, je me plains moins, et mes chiffres le montrent.",
    name: "Prénom N.",
    detail: "Activité · Ville",
  },
];

export type OfferStep = {
  number: string;
  title: string;
  body: string;
};

export const offerSteps: OfferStep[] = [
  {
    number: "01",
    title: "Tu réserves ton appel de clarté",
    body: "30 minutes, en visio ou par téléphone. Tu remplis le formulaire, je reçois ta demande sur WhatsApp et je te propose un créneau.",
  },
  {
    number: "02",
    title: "On pose ton diagnostic",
    body: "Ta situation, tes moyens, ton projet. Je te dis franchement où tu en es, ce qui bloque, et s'il y a une opportunité rentable à saisir maintenant.",
  },
  {
    number: "03",
    title: "On lance les 90 jours",
    body: "Si le projet et toi tenez la route, on démarre l'accompagnement : phases, livrables et points de suivi jusqu'au lancement.",
  },
];

export const offerIncludes: string[] = [
  "Diagnostic honnête de ton projet ou de ton idée",
  "Le premier levier de financement adapté à ta situation",
  "Les trois erreurs à ne surtout pas commettre cette année",
  "Un ordre de priorités clair pour les 30 prochains jours",
  "Réponse à ta demande sous 24 à 48 h",
];

export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "Je n'ai presque pas d'argent. Est-ce que ça peut marcher ?",
    answer:
      "Oui, et c'est précisément le point de départ de la méthode. On ne construit pas ton projet autour d'un capital que tu n'as pas : on choisit un modèle compatible avec tes moyens actuels, puis on fait financer la croissance par les premiers clients. Le manque d'argent est une contrainte, pas une excuse.",
  },
  {
    question: "Je n'ai aucune idée de business. C'est bloquant ?",
    answer:
      "Non. La majorité de ceux que j'accompagne arrivent avec une envie, pas avec une idée. La première phase des 90 jours sert exactement à ça : lire ton marché, repérer où l'argent circule déjà et choisir un projet qui correspond à ton profil et à tes moyens.",
  },
  {
    question: "Pourquoi « sans dépendre des banques » ?",
    answer:
      "Parce que pour un jeune sans garantie ni historique, le crédit bancaire est long, incertain et souvent hors de portée. Il existe d'autres leviers — prévente, acomptes, épargne structurée, tontine, associés, partenariats — qui permettent de démarrer sans attendre l'accord de quelqu'un d'autre.",
  },
  {
    question: "Est-ce que je dois être au Bénin ?",
    answer:
      "Non. L'accompagnement se fait à distance, en visio et par messagerie. Je travaille avec des jeunes de plusieurs pays d'Afrique francophone, et la méthode s'adapte à ton marché local.",
  },
  {
    question: "Combien de temps dois-je y consacrer chaque semaine ?",
    answer:
      "Compte quelques heures par semaine pour les points de suivi et le travail de terrain. Ce n'est pas un programme à regarder : chaque phase demande des actions concrètes, et c'est ce qui fait la différence à la fin des 90 jours.",
  },
  {
    question: "Que se passe-t-il après l'appel de clarté ?",
    answer:
      "Deux cas. Soit ton projet et ton profil correspondent à l'accompagnement, et je te présente le cadre, le rythme et les conditions. Soit ce n'est pas le bon moment pour toi, et je te le dis — avec les priorités à traiter d'ici là. Dans les deux cas tu repars avec un diagnostic utile.",
  },
];

export const marqueeItems: string[] = [
  "Idée rentable",
  "Financement sans banque",
  "Mindset d'aigle",
  "Exécution",
  "Discipline",
  "Premiers revenus",
];

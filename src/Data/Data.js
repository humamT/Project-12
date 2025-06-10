// const portfolioData = {
//   name: "Humam ALTOUKHI",
//   tagline: "Creative Web Integrator & Frontend Developer",
//   introduction: "Creating responsive web applications from concept to deployment",
//   about: {
//     p1: "Hello! I'm Humam, a passionate web developer with a knack for creating clean, efficient, and engaging digital experiences. My journey into web development started with a fascination for how things work on the internet, which quickly grew into a career where I can blend creativity with problem-solving.",
//     p2: "I specialize in frontend development with React and have a strong foundation in HTML, CSS, and JavaScript. I'm dedicated to writing clean, maintainable code and am always eager to learn new technologies and improve my skills.",
//     p3: "When I'm not coding, I enjoy cinemas, gaming, and of course exploring new cafes."
//   },
//   projects: [
//     {
//       title: "Print It!",
//       shortDescription: "A dynamic and responsive image carousel built with vanilla JavaScript.",
//       longDescription: "This project is a clean and functional image slider created to showcase different prints. It features interactive navigation with previous/next arrows and clickable dots that correspond to each slide. The JavaScript logic dynamically updates the banner image, the descriptive text, and highlights the active dot based on the user's selection, providing a seamless browsing experience.",
//       tags: ["HTML5", "CSS3", "DOM Manipulation"],
//       image: "/Images/print-it-preview.png",
//       liveUrl: "https://humamt.github.io/Project-5/",
//       codeUrl: "https://github.com/humamT/Project-5" 
//     },
//     {
//       title: "Kasa - Real Estate Listings",
//       shortDescription: "A modern and elegant real estate site for finding and viewing apartment listings.",
//       longDescription: "Kasa is a fictional real estate listing platform that allows users to browse and view details for various rental properties. It features a clean, responsive interface with a homepage gallery, individual property pages with image carousels, ratings, and detailed descriptions. The project showcases skills in building a multi-page, component-based application.",
//       tags: ["React", "JavaScript", "SCSS"],
//       image: "/Images/Kasa.png",
//       liveUrl: "https://humamt.github.io/Project-7/",
//       codeUrl: "https://github.com/humamT/Project-7"
//     },
//     {
//       title: "Portfolio Nina Carducci",
//       shortDescription: "A professional portfolio website for Nina Carducci, a photographer showcasing her work and services.",
//       longDescription: "A clean and elegant portfolio website created for the photographer Nina Carducci. The site features a gallery of her photography and a detailed services section with clear pricing for different tasks like photoshoots and retouching. The project focuses on providing an online presence that effectively markets her skills and services to potential clients.",
//       tags: ["JavaScript", "CSS3", "HTML5"],
//       image: "/Images/Nina.png",
//       liveUrl: "https://humamt.github.io/Project-8/",
//       codeUrl: "https://github.com/humamT/Project-8"
//     }
//   ],
//   skills: {
//     languages: ["JavaScript (ES6+)", "React.js", "HTML5", "CSS3"],
//     tools: ["Git & GitHub", "npm / yarn", "VS Code", "Firebase", "Netlify", "Responsive Design"]
//   },
//   contact: {
//     email: "humam.01@hotmail.com",
//     linkedin: "https://www.linkedin.com/in/humam-altoukhi-aa1098274/",
//     github: "https://github.com/humamT"
//   }
// };

// export default portfolioData;

const portfolioData = {
  // This is a proper name, so it doesn't need to change.
  name: "Humam ALTOUKHI",

  // --- TEXT THAT NEEDS TRANSLATION ---
  tagline: {
    fr: "Intégrateur Web Créatif & Développeur Frontend",
    en: "Creative Web Integrator & Frontend Developer",
  },
  introduction: {
    fr: "Création d'applications web responsives, du concept au déploiement",
    en: "Creating responsive web applications from concept to deployment",
  },
  about: {
    p1: {
      fr: "Bonjour ! Je suis Humam, un développeur web passionné avec un talent pour créer des expériences numériques épurées, efficaces et engageantes. Mon parcours dans le développement web a commencé par une fascination pour le fonctionnement d'Internet, qui s'est rapidement transformée en une carrière où je peux allier créativité et résolution de problèmes.",
      en: "Hello! I'm Humam, a passionate web developer with a knack for creating clean, efficient, and engaging digital experiences. My journey into web development started with a fascination for how things work on the internet, which quickly grew into a career where I can blend creativity with problem-solving.",
    },
    p2: {
      fr: "Je me spécialise dans le développement frontend avec React et possède une base solide en HTML, CSS et JavaScript. Je m'engage à écrire du code propre et maintenable et je suis toujours désireux d'apprendre de nouvelles technologies et d'améliorer mes compétences.",
      en: "I specialize in frontend development with React and have a strong foundation in HTML, CSS, and JavaScript. I'm dedicated to writing clean, maintainable code and am always eager to learn new technologies and improve my skills.",
    },
    p3: {
      fr: "Quand je ne code pas, j'aime le cinéma, les jeux vidéo et, bien sûr, explorer de nouveaux cafés.",
      en: "When I'm not coding, I enjoy cinemas, gaming, and of course exploring new cafes.",
    },
  },

  // --- ARRAY OF PROJECTS ---
  projects: [
    {
      title: {
        fr: "Print It!",
        en: "Print It!",
      },
      shortDescription: {
        fr: "Un carrousel d'images dynamique et réactif construit avec du JavaScript pur.",
        en: "A dynamic and responsive image carousel built with vanilla JavaScript.",
      },
      longDescription: {
        fr: "Ce projet est un carrousel d'images épuré et fonctionnel créé pour présenter différentes impressions. Il dispose d'une navigation interactive avec des flèches précédent/suivant et des points cliquables correspondant à chaque diapositive. La logique JavaScript met à jour dynamiquement l'image de la bannière, le texte descriptif et met en évidence le point actif en fonction de la sélection de l'utilisateur, offrant une expérience de navigation fluide.",
        en: "This project is a clean and functional image slider created to showcase different prints. It features interactive navigation with previous/next arrows and clickable dots that correspond to each slide. The JavaScript logic dynamically updates the banner image, the descriptive text, and highlights the active dot based on the user's selection, providing a seamless Browse experience.",
      },
      // --- DATA THAT DOES NOT NEED TRANSLATION ---
      tags: ["HTML5", "CSS3", "DOM Manipulation"],
      image: "/Images/print-it-preview.png",
      liveUrl: "https://humamt.github.io/Project-5/",
      codeUrl: "https://github.com/humamT/Project-5",
    },
    {
      title: {
        fr: "Kasa - Annonces Immobilières",
        en: "Kasa - Real Estate Listings",
      },
      shortDescription: {
        fr: "Un site immobilier moderne et élégant pour trouver et consulter des annonces d'appartements.",
        en: "A modern and elegant real estate site for finding and viewing apartment listings.",
      },
      longDescription: {
        fr: "Kasa est une plateforme fictive d'annonces immobilières qui permet aux utilisateurs de parcourir et de voir les détails de diverses propriétés à louer. Elle présente une interface épurée et réactive avec une galerie sur la page d'accueil, des pages de propriété individuelles avec des carrousels d'images, des évaluations et des descriptions détaillées. Le projet met en valeur les compétences dans la création d'une application multi-pages basée sur des composants.",
        en: "Kasa is a fictional real estate listing platform that allows users to browse and view details for various rental properties. It features a clean, responsive interface with a homepage gallery, individual property pages with image carousels, ratings, and detailed descriptions. The project showcases skills in building a multi-page, component-based application.",
      },
      tags: ["React", "JavaScript", "SCSS"],
      image: "/Images/Kasa.png",
      liveUrl: "https://humamt.github.io/Project-7/",
      codeUrl: "https://github.com/humamT/Project-7",
    },
    {
      title: {
        fr: "Portfolio Nina Carducci",
        en: "Portfolio Nina Carducci",
      },
      shortDescription: {
        fr: "Le site portfolio professionnel de Nina Carducci, une photographe présentant son travail et ses services.",
        en: "A professional portfolio website for Nina Carducci, a photographer showcasing her work and services.",
      },
      longDescription: {
        fr: "Un site portfolio épuré et élégant créé pour la photographe Nina Carducci. Le site présente une galerie de ses photographies et une section de services détaillés avec des prix clairs pour différentes tâches comme les séances photo et la retouche. Le projet vise à créer une présence en ligne élégante qui commercialise efficacement ses compétences et services auprès de clients potentiels.",
        en: "A clean and elegant portfolio website created for the photographer Nina Carducci. The site features a gallery of her photography and a detailed services section with clear pricing for different tasks like photoshoots and retouching. The project focuses on providing an online presence that effectively markets her skills and services to potential clients.",
      },
      tags: ["JavaScript", "CSS3", "HTML5"],
      image: "/Images/Nina.png",
      liveUrl: "https://humamt.github.io/Project-8/",
      codeUrl: "https://github.com/humamT/Project-8",
    },
  ],

  // --- TECHNICAL TERMS - Generally not translated ---
  skills: {
    languages: ["JavaScript (ES6+)", "React.js", "HTML5", "CSS3"],
    tools: ["Git & GitHub", "npm / yarn", "VS Code", "Firebase", "Netlify", "Responsive Design"],
  },
  contact: {
    email: "humam.01@hotmail.com",
    linkedin: "https://www.linkedin.com/in/humam-altoukhi-aa1098274/",
    github: "https://github.com/humamT",
  },
};

export default portfolioData;
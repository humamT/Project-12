// import Section from '../Section/Section';
// import './Hero.css'; // Assuming you have a CSS file for styles

// const Hero = ({ data }) => (
//   <Section id="home">
//     <div className="hero-content">
//       <div className="container">
//         <h1>{data.name}</h1>
//         <p className="tagline">{data.tagline}</p>
//         <p className="introduction">{data.introduction}</p>
//         <a href="#projects" className="hero-button">View More</a>
//       </div>
//     </div>
//   </Section>
// );

// export default Hero;

import Section from '../Section/Section';
import './Hero.css';
import { useLanguage } from '../../context/LanguageContext'; // <-- 1. Import the useLanguage hook

const Hero = ({ data }) => {
  const { language } = useLanguage(); // <-- 2. Get the current language

  return (
    <Section id="home">
      <div className="hero-content">
        <div className="container">
          {/* The name does not need translation */}
          <h1>{data.name}</h1>
          
          {/* 3. Access the tagline and introduction using the language variable */}
          <p className="tagline">{data.tagline[language]}</p>
          <p className="introduction">{data.introduction[language]}</p>
          
          {/* 4. Replace hardcoded button text with dynamic text */}
          <a href="#projects" className="hero-button">
            {language === 'fr' ? 'Découvrir Mes Projets' : 'View My Work'}
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
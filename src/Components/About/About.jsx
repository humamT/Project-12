// import Section from '../Section/Section';

// const About = ({ data }) => (
//   <Section id="about" className="section-bg-white">
//     <div className="container">
//       <h2 className="section-title">About Me</h2>
//       <div className="about-layout">
//         <div className="about-image-container">
//           <img src="/Images/IMG_1081.jpg" alt="..." />
//         </div>
//         <div className="about-text">
//           <p>{data.about.p1}</p>
//           <p>{data.about.p2}</p>
//           <p>{data.about.p3}</p>
//         </div>
//       </div>
//     </div>
//   </Section>
// );

// export default About;

import Section from '../Section/Section';
import { useLanguage } from '../../context/LanguageContext'; // <-- 1. Import the useLanguage hook

const About = ({ data }) => {
  const { language } = useLanguage(); // <-- 2. Get the current language from the context

  return (
    <Section id="about" className="section-bg-white">
      <div className="container">
        {/* 3. Replace hardcoded text with dynamic text */}
        <h2 className="section-title">{language === 'fr' ? 'À Propos de Moi' : 'About Me'}</h2>
        <div className="about-layout">
          <div className="about-image-container">
            {/* 4. Add dynamic and accessible alt text */}
            <img 
              src="/Images/IMG_1081.jpg" 
              alt={language === 'fr' ? 'Photo de profil de Humam ALTOUKHI' : 'Profile picture of Humam ALTOUKHI'} 
            />
          </div>
          <div className="about-text">
            {/* 5. Access the paragraph text using the language variable */}
            <p>{data.about.p1[language]}</p>
            <p>{data.about.p2[language]}</p>
            <p>{data.about.p3[language]}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
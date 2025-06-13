import Section from '../Section/Section';
import { useLanguage } from '../../context/LanguageContext';

const About = ({ data }) => {
  const { language } = useLanguage();

  // Optimization: Destructure the 'about' object from the data prop
  // This makes the JSX below cleaner to read.
  const { p1, p2, p3 } = data.about;

  return (
    <Section id="about" className="section-bg-white">
      <div className="container">
        <h2 className="section-title">{language === 'fr' ? 'À Propos de Moi' : 'About Me'}</h2>
        <div className="about-layout">
          <div className="about-image-container">
            <img
              src="/Images/IMG_1081.jpg"
              alt={language === 'fr' ? 'Photo de profil de Humam ALTOUKHI' : 'Profile picture of Humam ALTOUKHI'}
            />
          </div>
          <div className="about-text">
            {/* Now we can access the paragraphs directly */}
            <p>{p1[language]}</p>
            <p>{p2[language]}</p>
            <p>{p3[language]}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
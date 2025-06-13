import Section from '../Section/Section';
import { useLanguage } from '../../context/LanguageContext'; // <-- 1. Import the hook

const Skills = ({ data }) => {
  const { language } = useLanguage(); // <-- 2. Get the current language

  return (
    <Section id="skills" className="section-bg-white">
      <div className="container">
        {/* 3. Make titles and subtitles dynamic */}
        <h2 className="section-title">{language === 'fr' ? 'Compétences Techniques' : 'Technical Skills'}</h2>
        <p className="section-subtitle">
          {language === 'fr' 
            ? "J'ai de l'expérience avec une gamme de technologies de développement web modernes. Voici un résumé de ma boîte à outils techniques."
            : "I have knowledge with a range of modern web development technologies. Here's a summary of my technical toolkit."
          }
        </p>
        <div className="skills-container">
          <div className="skills-category">
            <h3>{language === 'fr' ? 'Langages & Frameworks' : 'Languages & Frameworks'}</h3>
            <div className="skills-list">
              {/* Note: The skills themselves are technical terms and are not translated */}
              {data.skills.languages.map(skill => <span key={skill} className="skill-badge">{skill}</span>)}
            </div>
          </div>
          <div className="skills-category">
            <h3>{language === 'fr' ? 'Outils & Plateformes' : 'Tools & Platforms'}</h3>
            <div className="skills-list">
              {data.skills.tools.map(skill => <span key={skill} className="skill-badge">{skill}</span>)}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
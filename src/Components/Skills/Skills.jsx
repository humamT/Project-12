import Section from '../Section/Section';
import { useLanguage } from '../../context/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCode, faComments } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  "fa-graduation-cap": faGraduationCap,
  "fa-code": faCode,
  "fa-comments": faComments,
  // Add more mappings if you add more icons
};

const Skills = ({ data }) => {
  const { language } = useLanguage();

  return (
    <Section id="skills" className="section-bg-white">
      <div className="container">
        <h2 className="section-title">{language === 'fr' ? 'Compétences Techniques & Formation' : 'Technical Skills & Education '}</h2>
        <p className="section-subtitle">
          {language === 'fr'
            ? "J'ai de l'expérience avec une gamme de technologies de développement web modernes. Voici un résumé de ma boîte à outils techniques."
            : "I have knowledge with a range of modern web development technologies. Here's a summary of my technical toolkit."
          }
        </p>
        <div className="skills-container">

          {/* Formation Section */}
          <div className="skills-category">
            <h3>{language === 'fr' ? 'Formation' : 'Education'}</h3>
            <div className="formation-list">
              {data.skills.formation && data.skills.formation.map((item, idx) => (
                <div key={idx} className="formation-item">
                  <div className="formation-icon">
                    <FontAwesomeIcon icon={iconMap[item.icon]} size="2x" />
                  </div>
                  <div className="formation-title">
                    {item.title[language]}
                  </div>
                  <div className="formation-description">
                    {item.description[language]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Existing Languages & Frameworks */}
          <div className="skills-category">
            <h3>{language === 'fr' ? 'Langages & Frameworks' : 'Languages & Frameworks'}</h3>
            <div className="skills-list">
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
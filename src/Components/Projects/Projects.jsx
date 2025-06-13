import Section from '../Section/Section';
import { useLanguage } from '../../context/LanguageContext'; // <-- 1. Import the useLanguage hook

const Projects = ({ setSelectedProject, data }) => {
  const { language } = useLanguage(); // <-- 2. Get the current language from the context

  return (
    <Section id="projects">
      <div className="container">
        {/* 3. Replace hardcoded text with dynamic text based on language */}
        <h2 className="section-title">{language === 'fr' ? 'Mes Projets' : 'My Projects'}</h2>
        <p className="section-subtitle">
          {language === 'fr' 
            ? "Voici quelques projets sur lesquels j'ai travaillé. Ils démontrent mes compétences à transformer des idées en applications web fonctionnelles et conviviales."
            : "Here are some of the projects I've worked on, which show my skills in turning ideas into functional and user-friendly web applications."
          }
        </p>
        <div className="projects-grid">
          {/* Using the `data` prop you're already passing in */}
          {data.projects.map((project) => (
            // 4. Use a stable key instead of index, like the unique English title
            <div key={project.title.en} onClick={() => setSelectedProject(project)} className="project-card">
              
              {/* 5. Access the project data using the `language` variable */}
              <img src={project.image} alt={project.title[language]} />
              <div className="card-content">
                <h3>{project.title[language]}</h3>
                <p>{project.shortDescription[language]}</p>
                <div className="tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
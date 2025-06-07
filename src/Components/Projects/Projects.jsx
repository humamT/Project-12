import Section from '../Section/Section';

const Projects = ({ setSelectedProject, data }) => (
  <Section id="projects">
    <div className="container">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">Here are a few projects I've worked on. They showcase my skills in turning ideas into functional and user-friendly web applications. Click on any project to learn more.</p>
      <div className="projects-grid">
        {data.projects.map((project, index) => (
          <div key={index} onClick={() => setSelectedProject(project)} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>
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

export default Projects;
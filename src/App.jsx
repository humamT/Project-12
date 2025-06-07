import React, { useState, useEffect, useRef } from 'react';
import './App.css'; // Import our new stylesheet
import Header from './Components/Header/Header.jsx';
import Hero from './Components/Hero/Hero.jsx';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import portfolioData from './Data/Data.js';


const ProjectModal = ({ project, closeModal }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [closeModal]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-inner">
          <div className="modal-header">
            <h2>{project.title}</h2>
            <button onClick={closeModal} className="modal-close-button">&times;</button>
          </div>
          <img src={project.image} alt={project.title} />
          <div className="tags">
            {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
          </div>
          <p className="description">{project.longDescription}</p>
          <div className="modal-actions">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="modal-button modal-button-primary">Live Demo</a>
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="modal-button modal-button-secondary">View Code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  
  return (
    <>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} data={portfolioData} />
      <main>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Projects setSelectedProject={setSelectedProject} data={portfolioData} />
        <Skills data={portfolioData} />
        <Contact data={portfolioData} />
      </main>
      <Footer data={portfolioData} />
      {selectedProject && <ProjectModal project={selectedProject} closeModal={() => setSelectedProject(null)} />}
    </>
  );
}

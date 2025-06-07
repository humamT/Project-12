import React, { useState, useEffect } from 'react';
import Section from '../Section/Section';

const Header = ({ activeSection, setActiveSection, data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let current = 'home';
      document.querySelectorAll('section[id]').forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const getNavLinkClass = (sectionId) => {
    return `nav-link ${activeSection === sectionId ? 'nav-link-active' : ''}`;
  };

  // Use initials from data.name, fallback to "JD"
  const getInitials = (name) => {
    if (!name) return "JD";
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <a href="#home" className="header-logo">{getInitials(data?.name)}</a>
        <nav className="main-nav">
          <a href="#about" className={getNavLinkClass('about')}>About</a>
          <a href="#projects" className={getNavLinkClass('projects')}>Projects</a>
          <a href="#skills" className={getNavLinkClass('skills')}>Skills</a>
          <a href="#contact" className={getNavLinkClass('contact')}>Contact</a>
        </nav>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-button">☰</button>
      </div>
      {isMenuOpen && (
        <div className="mobile-nav">
          <a href="#about" onClick={() => setIsMenuOpen(false)} className={getNavLinkClass('about')}>About</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className={getNavLinkClass('projects')}>Projects</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)} className={getNavLinkClass('skills')}>Skills</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className={getNavLinkClass('contact')}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
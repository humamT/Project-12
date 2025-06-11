import React, { useState, useEffect } from 'react';
// 1. You need to get toggleLanguage from the context as well
import { useLanguage } from '../../context/LanguageContext'; 
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';

const Header = ({ activeSection, setActiveSection, data }) => {
  // 2. Destructure toggleLanguage here
  const { language, toggleLanguage } = useLanguage(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'about', fr: 'À Propos', en: 'About' },
    { id: 'projects', fr: 'Projets', en: 'Projects' },
    { id: 'skills', fr: 'Compétences', en: 'Skills' },
    { id: 'contact', fr: 'Contact', en: 'Contact' }
  ];

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

  const getInitials = (name) => {
    if (!name) return "JD";
    return name.split(' ').map(n => n[0]).join('');
  };

  const handleMobileLangClick = (e) => {
    e.preventDefault(); 
    toggleLanguage();
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <a href="#home" className="header-logo">{getInitials(data?.name)}</a>
        <nav className="main-nav">
          {navLinks.map(link => (
            <a key={link.id} href={`#${link.id}`} className={getNavLinkClass(link.id)}>
              {link[language]}
            </a>
          ))}
        </nav>

        {/* This div will be hidden on mobile via CSS */}
        <div className="desktop-lang-switch">
          <LanguageSwitch />
        </div>
        
        {/* 3. The duplicate LanguageSwitch that was here has been removed */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-button">☰</button>
      </div>
      {isMenuOpen && (
        <div className="mobile-nav">
          {/* 4. Add the new language link for the mobile menu */}
          <a href="#" onClick={handleMobileLangClick} className="nav-link">
            {language === 'fr' ? 'Switch to English' : 'Passer au Français'}
          </a>
          
          {/* The rest of the links */}
          {navLinks.map(link => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setIsMenuOpen(false)} className={getNavLinkClass(link.id)}>
              {link[language]}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
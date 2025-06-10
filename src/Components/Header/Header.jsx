// import React, { useState, useEffect } from 'react';
// import Section from '../Section/Section';

// const Header = ({ activeSection, setActiveSection, data }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);

//       let current = 'home';
//       document.querySelectorAll('section[id]').forEach(section => {
//         const sectionTop = section.offsetTop;
//         if (window.scrollY >= sectionTop - 150) {
//           current = section.getAttribute('id');
//         }
//       });
//       setActiveSection(current);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [setActiveSection]);

//   const getNavLinkClass = (sectionId) => {
//     return `nav-link ${activeSection === sectionId ? 'nav-link-active' : ''}`;
//   };

//   // Use initials from data.name, fallback to "JD"
//   const getInitials = (name) => {
//     if (!name) return "JD";
//     return name.split(' ').map(n => n[0]).join('');
//   };

//   return (
//     <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
//       <div className="container">
//         <a href="#home" className="header-logo">{getInitials(data?.name)}</a>
//         <nav className="main-nav">
//           <a href="#about" className={getNavLinkClass('about')}>About</a>
//           <a href="#projects" className={getNavLinkClass('projects')}>Projects</a>
//           <a href="#skills" className={getNavLinkClass('skills')}>Skills</a>
//           <a href="#contact" className={getNavLinkClass('contact')}>Contact</a>
//         </nav>
//         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-button">☰</button>
//       </div>
//       {isMenuOpen && (
//         <div className="mobile-nav">
//           <a href="#about" onClick={() => setIsMenuOpen(false)} className={getNavLinkClass('about')}>About</a>
//           <a href="#projects" onClick={() => setIsMenuOpen(false)} className={getNavLinkClass('projects')}>Projects</a>
//           <a href="#skills" onClick={() => setIsMenuOpen(false)} className={getNavLinkClass('skills')}>Skills</a>
//           <a href="#contact" onClick={() => setIsMenuOpen(false)} className={getNavLinkClass('contact')}>Contact</a>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext'; // <-- 1. Import the language hook
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch'; // <-- 2. Import the switch component

const Header = ({ activeSection, setActiveSection, data }) => {
  const { language } = useLanguage(); // <-- 3. Get the current language
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 4. Create a navigation data array to avoid repetition (DRY principle)
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

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <a href="#home" className="header-logo">{getInitials(data?.name)}</a>
        <nav className="main-nav">
          {/* 5. Map over the array to create dynamic nav links */}
          {navLinks.map(link => (
            <a key={link.id} href={`#${link.id}`} className={getNavLinkClass(link.id)}>
              {link[language]}
            </a>
          ))}
        </nav>
        {/* 6. Add the language switch to the header */}
        <LanguageSwitch />
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-button">☰</button>
      </div>
      {isMenuOpen && (
        <div className="mobile-nav">
          {/* 7. Map over the same array for the mobile menu */}
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
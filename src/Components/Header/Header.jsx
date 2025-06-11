import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';

const Header = ({ activeSection, setActiveSection, data }) => {
  // --- STATE AND HOOKS ---
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false); // This state triggers the closing animation
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef();

  // --- NAVIGATION DATA ---
  const navLinks = [
    { id: 'about', fr: 'À Propos', en: 'About' },
    { id: 'projects', fr: 'Projets', en: 'Projects' },
    { id: 'skills', fr: 'Compétences', en: 'Skills' },
    { id: 'contact', fr: 'Contact', en: 'Contact' }
  ];

  // --- MENU LOGIC ---
  // The openMenu function simply sets the state to true, causing the menu to render.
  const openMenu = () => setIsMenuOpen(true);

  // The closeMenu function handles the two-step process for a smooth exit animation.
  const closeMenu = () => {
    // Step 1: Set 'isMenuClosing' to true. This adds the '.mobile-nav-closing' class.
    // The component remains visible on screen while the closing animation plays.
    setIsMenuClosing(true);

    // Step 2: Set a timeout that matches the CSS animation duration.
    setTimeout(() => {
      // Step 3: After the animation finishes, remove the component from the DOM.
      setIsMenuOpen(false);
      // Step 4: Reset the closing state for the next time the menu is opened.
      setIsMenuClosing(false);
    }, 300); // This 300ms MUST match the animation duration in your CSS.
  };

  const handleMobileLangClick = (e) => {
    e.preventDefault();
    toggleLanguage();
    closeMenu();
  };

  const handleNavLinkClick = () => {
    closeMenu();
  };

  // --- BROWSER EVENT HANDLERS (EFFECTS) ---

  // Effect to handle clicking outside the mobile menu to close it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the menu is open and the click was outside the menu element.
      if (isMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isMenuOpen]); // This effect depends on 'isMenuOpen' to avoid running unnecessarily.

  // Effect to handle scroll position for header style and active section
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

  // --- HELPER FUNCTIONS ---
  const getNavLinkClass = (sectionId) => {
    return `nav-link ${activeSection === sectionId ? 'nav-link-active' : ''}`;
  };

  const getInitials = (name) => {
    if (!name) return "JD";
    return name.split(' ').map(n => n[0]).join('');
  };


  // --- JSX RENDER ---
  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <a href="#home" className="header-logo">{getInitials(data?.name)}</a>
        
        {/* Desktop Navigation */}
        <nav className="main-nav">
          {navLinks.map(link => (
            <a key={link.id} href={`#${link.id}`} className={getNavLinkClass(link.id)}>
              {link[language]}
            </a>
          ))}
        </nav>
        
        {/* Desktop Language Switch */}
        <div className="desktop-lang-switch">
          <LanguageSwitch />
        </div>
        
        {/* Mobile Menu Button */}
        <button onClick={isMenuOpen ? closeMenu : openMenu} className="mobile-menu-button">☰</button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {/* This entire block is only rendered if 'isMenuOpen' is true. */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          // The className is dynamic. When closing, it becomes "mobile-nav mobile-nav-closing".
          // This allows your CSS to target the closing state specifically.
          className={`mobile-nav ${isMenuClosing ? 'mobile-nav-closing' : ''}`}
        >
          <a href="#" onClick={handleMobileLangClick} className="nav-link">
            {language === 'fr' ? 'Switch to English' : 'Passer au Français'}
          </a>
          {navLinks.map(link => (
            <a key={link.id} href={`#${link.id}`} onClick={handleNavLinkClick} className={getNavLinkClass(link.id)}>
              {link[language]}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;

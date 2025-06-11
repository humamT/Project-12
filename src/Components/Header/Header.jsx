import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';

const Header = ({ activeSection, setActiveSection, data }) => {
  // --- STATE AND HOOKS ---
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
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
  const openMenu = () => setIsMenuOpen(true);

  const closeMenu = () => {
    setIsMenuClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsMenuClosing(false);
    }, 300);
  };

  const handleMobileLangClick = (e) => {
    e.preventDefault();
    toggleLanguage();
    closeMenu();
  };

  const handleNavLinkClick = () => {
    closeMenu();
  };

  // --- This function handles toggling the menu state ---
  const handleMenuToggle = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // --- BROWSER EVENT HANDLERS (EFFECTS) ---
  useEffect(() => {
    const handleOutsideClick = (event) => {
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
  }, [isMenuOpen]);

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

        <nav className="main-nav">
          {navLinks.map(link => (
            <a key={link.id} href={`#${link.id}`} className={getNavLinkClass(link.id)}>
              {link[language]}
            </a>
          ))}
        </nav>

        <div className="desktop-lang-switch">
          <LanguageSwitch />
        </div>

        {/* --- REPLACED: The old button is replaced with this new SVG version --- */}
        <label className="mobile-menu-button" htmlFor="mobile-menu-check">
          <input
            id="mobile-menu-check"
            type="checkbox"
            checked={isMenuOpen}
            onChange={handleMenuToggle}
          />
          <svg viewBox="0 0 32 32">
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" />
            <path className="line" d="M7 16 27 16" />
          </svg>
        </label>
      </div>

      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
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

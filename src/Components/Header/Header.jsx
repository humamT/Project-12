import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';

// --- OPTIMIZATION 1: Create a custom hook for scroll logic ---
// This separates the scroll-related logic from the component's rendering logic,
// making the main component cleaner and the scroll logic reusable.
const useScrollSpy = (setActiveSection) => {
  useEffect(() => {
    const handleScroll = () => {
      let currentSectionId = 'home';
      const sections = document.querySelectorAll('section[id]');

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          currentSectionId = section.getAttribute('id');
        }
      });
      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);
};


const Header = ({ activeSection, setActiveSection, data }) => {
  // --- STATE AND HOOKS ---
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef();

  // --- NAVIGATION DATA ---
  // Using React.useMemo here is a micro-optimization to ensure this array is not
  // recreated on every render, though it's not strictly necessary for a small, static array.
  const navLinks = React.useMemo(() => [
    { id: 'about', fr: 'À Propos', en: 'About' },
    { id: 'projects', fr: 'Projets', en: 'Projects' },
    { id: 'skills', fr: 'Compétences', en: 'Skills' },
    { id: 'contact', fr: 'Contact', en: 'Contact' }
  ], []);

  // --- MENU LOGIC ---
  // OPTIMIZATION 2: Wrap functions that are passed down or used in effects
  // with useCallback to prevent them from being recreated on every render.
  const openMenu = useCallback(() => setIsMenuOpen(true), []);

  const closeMenu = useCallback(() => {
    setIsMenuClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsMenuClosing(false);
    }, 300);
  }, []);

  const handleMenuToggle = useCallback(() => {
    isMenuOpen ? closeMenu() : openMenu();
  }, [isMenuOpen, closeMenu, openMenu]);

  // --- BROWSER EVENT HANDLERS (EFFECTS) ---

  // Use our new custom hook for scroll spying
  useScrollSpy(setActiveSection);

  // Effect for the scrolled header style
  useEffect(() => {
    const handleScrollStyle = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScrollStyle, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollStyle);
  }, []);

  // Effect for handling clicks outside the mobile menu
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
  }, [isMenuOpen, closeMenu]);


  // --- HELPER FUNCTIONS ---
  const getNavLinkClass = useCallback((sectionId) => {
    return `nav-link ${activeSection === sectionId ? 'nav-link-active' : ''}`;
  }, [activeSection]);

  const getInitials = useCallback((name) => {
    if (!name) return "JD";
    return name.split(' ').map(n => n[0]).join('');
  }, []);

  const handleMobileLangClick = useCallback((e) => {
    e.preventDefault();
    toggleLanguage();
    closeMenu();
  }, [toggleLanguage, closeMenu]);


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
            <a key={link.id} href={`#${link.id}`} onClick={closeMenu} className={getNavLinkClass(link.id)}>
              {link[language]}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;

// src/Components/LanguageSwitch/LanguageSwitch.jsx
import { useLanguage } from '../../context/LanguageContext';
import './LanguageSwitch.css'; 

function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();
  const isChecked = language === 'en';

  return (
    // 1. The inline style is removed and handled by the CSS class
    <div className="language-switch-container">

      {/* 2. The inline style is replaced with dynamic classNames */}
      <span className={`lang-label ${language === 'en' ? 'lang-label-active' : ''}`}>
        FR
      </span>

      <label className="switch">
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={toggleLanguage} 
        />
        <span className="slider"></span>
      </label>
      
      {/* 3. The same pattern is applied here */}
      <span className={`lang-label ${language === 'fr' ? 'lang-label-active' : ''}`}>
        EN
      </span>
    </div>
  );
}

export default LanguageSwitch;
// const Footer = ({ data }) => (
//   <footer className="footer">
//     <div className="container">
//       <p>&copy; {new Date().getFullYear()} {data.name}. Designed and built with ❤️.</p>
//     </div>
//   </footer>
// );

// export default Footer;

import { useLanguage } from '../../context/LanguageContext'; // <-- 1. Import the useLanguage hook

const Footer = ({ data }) => {
  const { language } = useLanguage(); // <-- 2. Get the current language

  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} {data.name}.{' '}
          {/* 3. Replace hardcoded text with dynamic text */}
          {language === 'fr' 
            ? 'Conçu et réalisé avec ❤️.' 
            : 'Designed and built with ❤️.'
          }
        </p>
      </div>
    </footer>
  );
};

export default Footer;
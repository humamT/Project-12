// import Section from '../Section/Section';

// const Contact = ({ data }) => {
//   return (
//     <Section id="contact">
//       <div className="container contact-container">
//         <h2 className="section-title">Get In Touch</h2>
//         <p className="section-subtitle">I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hi, feel free to reach out.</p>
//         <div className="contact-links">
//           <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
//           <span className="separator">|</span>
//           <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
//           <span className="separator">|</span>
//           <a href={data.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default Contact;

import Section from '../Section/Section';
import { useLanguage } from '../../context/LanguageContext'; // <-- 1. Import the useLanguage hook

const Contact = ({ data }) => {
  const { language } = useLanguage(); // <-- 2. Get the current language from the context

  return (
    <Section id="contact">
      <div className="container contact-container">
        {/* 3. Replace hardcoded title with dynamic text */}
        <h2 className="section-title">{language === 'fr' ? 'Contactez-Moi' : 'Get In Touch'}</h2>
        
        {/* 4. Replace hardcoded subtitle with dynamic text */}
        <p className="section-subtitle">
          {language === 'fr'
            ? "Je suis actuellement ouvert à de nouvelles opportunités et collaborations. Si vous avez un projet en tête ou si vous voulez simplement dire bonjour, n'hésitez pas à me contacter."
            : "I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hi, feel free to reach out."
          }
        </p>
        
        <div className="contact-links">
          <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
          <span className="separator">|</span>
          {/* Note: Proper names like "LinkedIn" and "GitHub" often don't need translation */}
          <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="separator">|</span>
          <a href={data.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
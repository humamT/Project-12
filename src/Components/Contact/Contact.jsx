import Section from '../Section/Section';
import { useLanguage } from '../../context/LanguageContext';


const Contact = ({ data }) => {
  const { language } = useLanguage();

  return (
    <Section id="contact">
      <div className="container contact-container">
        {/* The main title and subtitle */}
        <h2 className="section-title">{language === 'fr' ? 'Contactez-Moi' : 'Get In Touch'}</h2>
        <p className="section-subtitle">
          {language === 'fr'
            ? "Je suis actuellement ouvert à de nouvelles opportunités et collaborations. Si vous avez un projet en tête, n'hésitez pas à me contacter."
            : "I'm currently open to new opportunities and collaborations. If you have a project in mind, feel free to reach out."
          }
        </p>

        {/* The Contact Form is now directly on the page */}
        <form name="contact" data-netlify="true" method="POST" action="/" className="contact-form">
          {/* This hidden input is required for Netlify Forms to work */}
          <input type="hidden" name="form-name" value="contact" />

          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder={language === 'fr' ? 'Nom' : 'Name'}
              required />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder={language === 'fr' ? 'Email' : 'Email'}
              required />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              placeholder={language === 'fr' ? 'Message' : 'Message'}
              rows="6"
              required></textarea>
          </div>
          <button type="submit" className="contact-button">
            {language === 'fr' ? 'Envoyer' : 'Send'}
          </button>
        </form>

        {/* The social links are still at the bottom */}
        <div className="contact-links">
          <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="separator">|</span>
          <a href={data.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
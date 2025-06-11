import React, { useState, useEffect } from 'react';
import Section from '../Section/Section';
import { useLanguage } from '../../context/LanguageContext';

const Contact = ({ data }) => {
  const { language } = useLanguage();
  const [formState, setFormState] = useState({
    submitting: false,
    succeeded: false,
  });

  // This effect will reset the success state after the popup animation finishes
  useEffect(() => {
    if (formState.succeeded) {
      const timer = setTimeout(() => {
        setFormState(prevState => ({ ...prevState, succeeded: false }));
      }, 4000); // Hide after 4 seconds to let the animation complete
      return () => clearTimeout(timer);
    }
  }, [formState.succeeded]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormState({ submitting: true, succeeded: false });

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        setFormState({ submitting: false, succeeded: true });
        form.reset();
      } else {
        setFormState({ submitting: false, succeeded: false });
        alert("Oops! There was a problem submitting your form.");
      }
    }).catch(error => {
      setFormState({ submitting: false, succeeded: false });
      alert("Oops! There was a network problem.");
    });
  };

  return (
    <Section id="contact">
      <div className="container contact-container">
        {/* Conditionally render the success popup based on the 'succeeded' state */}
        {formState.succeeded && (
          <div className="success-popup">
            {language === 'fr' ? 'Message envoyé, merci !' : 'Message sent, thank you!'}
          </div>
        )}
        
        <h2 className="section-title">{language === 'fr' ? 'Contactez-Moi' : 'Get In Touch'}</h2>
        <p className="section-subtitle">
          {language === 'fr'
            ? "Je suis actuellement ouvert à de nouvelles opportunités et collaborations. Si vous avez un projet en tête, n'hésitez pas à me contacter."
            : "I'm currently open to new opportunities and collaborations. If you have a project in mind, feel free to reach out."
          }
        </p>

        <form
          action="https://formspree.io/f/YOUR_UNIQUE_ID" // <-- PASTE YOUR FORMPSPREE URL HERE
          method="POST"
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder={language === 'fr' ? 'Nom' : 'Name'}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder={language === 'fr' ? 'Message' : 'Message'}
              rows="6"
              required
            ></textarea>
          </div>
          
          <button type="submit" className="contact-button" disabled={formState.submitting}>
            {formState.submitting 
              ? (language === 'fr' ? 'Envoi...' : 'Sending...') 
              : (language === 'fr' ? 'Envoyer' : 'Send')}
          </button>
        </form>

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

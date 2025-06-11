import React, { useState } from 'react'; // 1. Import useState
import Section from '../Section/Section';
import { useLanguage } from '../../context/LanguageContext';

const Contact = ({ data }) => {
  const { language } = useLanguage();
  // 2. State to manage the form's submission status
  const [formState, setFormState] = useState({
    submitting: false,
    succeeded: false,
  });

  // 3. The submission handler function
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default page reload
    setFormState({ submitting: true, succeeded: false }); // Show a "sending" state

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
        setFormState({ submitting: false, succeeded: true }); // Show success message
        form.reset(); // Clear the form fields
      } else {
        // Handle errors if you want
        setFormState({ submitting: false, succeeded: false });
        alert("Oops! There was a problem submitting your form.");
      }
    }).catch(error => {
      // Handle network errors
      setFormState({ submitting: false, succeeded: false });
      alert("Oops! There was a network problem.");
    });
  };

  return (
    <Section id="contact">
      <div className="container contact-container">
        <h2 className="section-title">{language === 'fr' ? 'Contactez-Moi' : 'Get In Touch'}</h2>
        <p className="section-subtitle">
          {/* ... your subtitle text ... */}
        </p>

        {/* 4. Update the form tag and add the onSubmit handler */}
        <form
          action="https://formspree.io/f/mdkzgkwe" // <-- PASTE YOUR FORMPSPREE URL HERE
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
          
          {/* 5. The button's text will now change based on the form state */}
          <button type="submit" className="contact-button" disabled={formState.submitting}>
            {formState.succeeded ? (language === 'fr' ? 'Merci !' : 'Thank You!') :
             formState.submitting ? (language === 'fr' ? 'Envoi...' : 'Sending...') :
             (language === 'fr' ? 'Envoyer' : 'Send')}
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

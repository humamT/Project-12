import React, { useState, useEffect } from 'react';
import Section from '../Section/Section';
import { useLanguage } from '../../context/LanguageContext';

const Contact = ({ data }) => {
  const { language } = useLanguage();

  // --- State for submission status ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  // --- NEW: State to hold the form's input data ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // --- NEW: This checks if all required fields have text ---
  const isFormValid = formData.name && formData.email && formData.message;

  // --- This effect handles the success popup visibility ---
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => setIsSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  // --- This effect handles the error message visibility ---
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // --- NEW: This function updates the state as the user types ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // --- The submission handler ---
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isFormValid) return; // Prevent submission if form is not valid

    setIsSubmitting(true);
    setError(null);

    const form = event.target;
    const formSubmitData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formSubmitData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        setFormData({ name: '', email: '', message: '' }); // Reset the form data state
      } else {
        const data = await response.json();
        if (data.errors) {
          setError(data.errors.map(err => err.message).join(', '));
        } else {
          setError(language === 'fr' ? 'Une erreur est survenue.' : 'An error occurred.');
        }
      }
    } catch (err) {
      setError(language === 'fr' ? 'Problème de réseau.' : 'Network problem.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <div className="container contact-container">
        {isSuccess && (
          <div className="success-popup">
            {language === 'fr' ? 'Message envoyé, merci !' : 'Message sent, thank you!'}
          </div>
        )}

        {error && (
          <div className="error-popup">
            {error}
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
          action="https://formspree.io/f/mdkzgkwe"
          method="POST"
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder={language === 'fr' ? 'Nom' : 'Name'}
              value={formData.name} // NEW: Bind value to state
              onChange={handleChange} // NEW: Handle changes
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email} // NEW: Bind value to state
              onChange={handleChange} // NEW: Handle changes
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder={language === 'fr' ? 'Message' : 'Message'}
              rows="6"
              value={formData.message} // NEW: Bind value to state
              onChange={handleChange} // NEW: Handle changes
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={`contact-button ${isFormValid ? 'contact-button-active' : ''}`} // NEW: Conditional class
            disabled={!isFormValid || isSubmitting} // NEW: Disable if form is not valid
          >
            {isSubmitting
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

import React, { useState, useEffect } from 'react';
import Section from '../Section/Section';
import { useLanguage } from '../../context/LanguageContext';

const Contact = ({ data }) => {
  const { language } = useLanguage();

  // --- OPTIMIZATION 1: More descriptive state variables ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null); // State for handling form errors

  // --- State to hold the form's input data ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const isFormValid = formData.name && formData.email && formData.message;

  // --- This effect handles the success popup visibility ---
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => setIsSuccess(false), 4000); // Popup disappears after 4s
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  // --- This effect handles the error message visibility ---
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000); // Errors stay visible for 5s
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // --- OPTIMIZATION 2: handleSubmit now uses async/await for better readability ---
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isFormValid) return;

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
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Handle server-side errors from Formspree more gracefully
        const data = await response.json();
        if (data.errors) {
          setError(data.errors.map(err => err.message).join(', '));
        } else {
          setError(language === 'fr' ? 'Une erreur est survenue.' : 'An error occurred.');
        }
      }
    } catch (err) {
      // Handle network errors
      setError(language === 'fr' ? 'Problème de réseau.' : 'Network problem.');
    } finally {
      // This block runs whether the submission succeeds or fails
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

        {/* OPTIMIZATION 3: The new error popup */}
        {error && (
          // You would style this class in your CSS, likely similar to .success-popup but with a red color
          <div className="error-popup">
            {error}
          </div>
        )}

        <h2 className="section-title">{language === 'fr' ? 'Contactez-Moi' : 'Get In Touch'}</h2>
        <p className="section-subtitle">
          {language === 'fr'
            ? "Je suis ouvert pour des collaborations. Si vous avez un projet en tête, n'hésitez pas à me contacter."
            : "I'm open to new opportunities and collaborations. If you have a project in mind, feel free to reach out."
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
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder={language === 'fr' ? 'Message' : 'Message'}
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={`contact-button ${isFormValid ? 'contact-button-active' : ''}`}
            disabled={!isFormValid || isSubmitting}
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
import Section from '../Section/Section';

const Contact = ({ data }) => {
  return (
    <Section id="contact">
      <div className="container contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hi, feel free to reach out.</p>
        <div className="contact-links">
          <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
          <span className="separator">|</span>
          <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="separator">|</span>
          <a href={data.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
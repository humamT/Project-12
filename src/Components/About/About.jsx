import Section from '../Section/Section';

const About = ({ data }) => (
  <Section id="about" className="section-bg-white">
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div className="about-layout">
        <div className="about-image-container">
          <img src="/Images/IMG_1081.jpg" alt="..." />
        </div>
        <div className="about-text">
          <p>{data.about.p1}</p>
          <p>{data.about.p2}</p>
          <p>{data.about.p3}</p>
        </div>
      </div>
    </div>
  </Section>
);

export default About;
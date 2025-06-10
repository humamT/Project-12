import Section from '../Section/Section';
import './Hero.css'; // Assuming you have a CSS file for styles

const Hero = ({ data }) => (
  <Section id="home">
    <div className="hero-content">
      <div className="container">
        <h1>{data.name}</h1>
        <p className="tagline">{data.tagline}</p>
        <p className="introduction">{data.introduction}</p>
        <a href="#projects" className="hero-button">View My Work</a>
      </div>
    </div>
  </Section>
);

export default Hero;
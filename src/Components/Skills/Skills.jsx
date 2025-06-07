import Section from '../Section/Section';

const Skills = ({ data }) => (
  <Section id="skills" className="section-bg-white">
    <div className="container">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">I have experience with a range of modern web development technologies. Here's a summary of my technical toolkit.</p>
      <div className="skills-container">
        <div className="skills-category">
          <h3>Languages & Frameworks</h3>
          <div className="skills-list">
            {data.skills.languages.map(skill => <span key={skill} className="skill-badge">{skill}</span>)}
          </div>
        </div>
        <div className="skills-category">
          <h3>Tools & Platforms</h3>
          <div className="skills-list">
            {data.skills.tools.map(skill => <span key={skill} className="skill-badge">{skill}</span>)}
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Skills;
import './Experience.css';

const experienceData = [
  {
    company: 'AventIQ',
    role: 'Full Stack Developer Intern',
    duration: 'January 2026 – February 2026',
    description:
      'Worked on full-stack development projects, building web applications and contributing to AI-powered solutions.',
  },
];

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section__container">
        <div className="section__header">
          <h2 className="section__title">
            Work <span>Experience</span>
          </h2>
        </div>

        <div className="experience__timeline">
          <div className="experience__line" aria-hidden="true"></div>

          {experienceData.map((exp, index) => (
            <div className="experience__item" key={index}>
              <div className="experience__dot" aria-hidden="true"></div>
              <div className="experience__card glass-card">
                <h3 className="experience__role">{exp.role}</h3>
                <p className="experience__company">{exp.company}</p>
                <span className="experience__date">{exp.duration}</span>
                <p className="experience__description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

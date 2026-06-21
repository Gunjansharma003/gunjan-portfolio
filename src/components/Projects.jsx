import './Projects.css';

const projectsData = [
  {
    title: 'Hybrid Firewall System',
    description:
      'Designed a dual-layer firewall combining network-level packet inspection with prompt-level input filtering to detect and block cyber threats.',
    tech: ['Python', 'React', 'FastAPI'],
    github: null,
    live: null,
  },
  {
    title: 'QR Code Generator',
    description:
      'Generate and download QR codes instantly from any text or URL.',
    tech: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/Gunjansharma003/digital-heroes-qr-generator',
    live: 'https://digital-heroes-qr-generator.vercel.app/',
  },
  {
    title: 'Movie Recommendation System',
    description:
      'Built a personalized movie recommendation system using collaborative and content-based filtering.',
    tech: ['Python', 'ML', 'Pandas', 'Scikit-learn', 'Streamlit'],
    github: null,
    live: null,
  },
  {
    title: 'SkillSync',
    description:
      'A personalized learning planner that helps users define career goals and track study progress using AI-powered suggestions.',
    tech: ['React', 'Firebase', 'GPT API'],
    github: null,
    live: null,
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section__container">
        <div className="section__header">
          <h2 className="section__title">
            Featured <span>Projects</span>
          </h2>
        </div>

        <div className="projects__grid">
          {projectsData.map((project, index) => (
            <article className="projects__card" key={index}>
              <div className="projects__card-gradient" aria-hidden="true"></div>
              <div className="projects__card-content">
                <span className="projects__card-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">
                  {project.description}
                </p>
                <div className="projects__card-tech">
                  {project.tech.map((t, i) => (
                    <span className="projects__card-tag" key={i}>
                      {t}
                    </span>
                  ))}
                </div>
                {(project.live || project.github) && (
                  <div className="projects__card-links">
                    {project.live && (
                      <a
                        href={project.live}
                        className="projects__card-link gradient-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="projects__card-link--outline outline-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

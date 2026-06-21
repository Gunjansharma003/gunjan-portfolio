function Hero() {
  return (
    <section className="section">
      <div className="section__container">
        <div
          className="glass-card"
          style={{
            padding: "60px 40px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              marginBottom: "15px",
            }}
            className="gradient-text"
          >
            Gunjan Sharma
          </h1>

          <h2
            style={{
              color: "var(--text-primary)",
              marginBottom: "20px",
            }}
          >
            Generative AI Engineer | Full Stack Developer
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto 30px",
              fontSize: "18px",
            }}
          >
            B.Tech AIML student passionate about Generative AI, AI Agents,
            LangChain, LangGraph, RAG systems, FastAPI, React and modern web
            technologies.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://github.com/Gunjansharma003"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-btn"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/gunjan-sharma-284589281"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-btn"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              download
              className="gradient-btn"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="outline-btn"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
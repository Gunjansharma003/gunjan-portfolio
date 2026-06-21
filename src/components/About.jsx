function About() {
  return (
    <section id="about" className="section">
      <div className="section__container">
        <div className="section__header">
          <h2 className="section__title">
            About <span>Me</span>
          </h2>
        </div>

        <div
          className="glass-card"
          style={{
            padding: "40px",
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "18px" }}>
            I am a B.Tech Computer Science (AIML) student with experience in
            Generative AI, Full Stack Development and AI-powered applications.
            I enjoy building practical solutions using LLMs, RAG systems,
            LangChain, LangGraph, FastAPI and React.
          </p>

          <br />

          <p>
            Currently focused on Generative AI engineering, AI Agents,
            Retrieval-Augmented Generation (RAG) and modern full-stack web
            development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
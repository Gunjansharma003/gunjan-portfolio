const skills = [
  "Python",
  "Java",
  "C++",
  "JavaScript",
  "React.js",
  "FastAPI",
  "Node.js",
  "MySQL",
  "LangChain",
  "LangGraph",
  "RAG",
  "Prompt Engineering",
  "Hugging Face",
  "DSA",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
];

function Skills() {
  return (
    <section className="section">
      <div className="section__container">
        <div className="section__header">
          <h2 className="section__title">
            My <span>Skills</span>
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            justifyContent: "center",
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: "15px 25px",
                color: "white",
                fontWeight: "600",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
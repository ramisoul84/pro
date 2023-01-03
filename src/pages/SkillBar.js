import "./skillbar.css";
export default function SkillBar() {
  return (
    <section className="container">
      <h1 className="title-text">React Progress Bar</h1>
      <div className="skill-box">
        <span className="title-skill">HTML</span>
        <div className="skill-bar">
          <span className="skill-per html">
            <span className="tooltip">95%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title-skill">CSS</span>
        <div className="skill-bar">
          <span className="skill-per css">
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div>
    </section>
  );
}

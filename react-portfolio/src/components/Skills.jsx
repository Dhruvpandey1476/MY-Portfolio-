import { SKILLS } from "../data.jsx";

const DELAY_CLASSES = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-container">
        <div className="section-label reveal">Technical Arsenal</div>
        <div className="skills-header">
          <div>
            <h2 className="section-title reveal">
              Skills &amp; <span style={{ color: "var(--cyan)" }}>Stack</span>
            </h2>
          </div>
        </div>
        <div className="skills-grid">
          {SKILLS.map((cat, i) => (
            <div
              className={`skill-category reveal ${DELAY_CLASSES[i % DELAY_CLASSES.length]}`}
              key={cat.name}
            >
              <div className="skill-cat-header">
                <div className="skill-cat-icon">{cat.icon}</div>
                <div className="skill-cat-name">{cat.name}</div>
              </div>
              <div className="skill-tags">
                {cat.tags.map((tag) => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

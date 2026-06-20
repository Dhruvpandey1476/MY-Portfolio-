import { PROJECTS } from "../data.jsx";

const DELAY_CLASSES = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-container">
        <div className="section-label reveal">Portfolio</div>
        <h2 className="section-title reveal">
          Featured <span style={{ color: "var(--cyan)" }}>Projects</span>
        </h2>
        <p className="section-sub reveal reveal-delay-1">
          Production-ready systems, not toy demos — each project ships a real ML pipeline end-to-end.
        </p>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div className={`project-card reveal ${DELAY_CLASSES[i % DELAY_CLASSES.length]}`} key={p.name}>
              <div className="project-header">
                <div className="project-icon">{p.icon}</div>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub">⭐</a>
                </div>
              </div>
              <div className="project-body">
                <div className="project-name">{p.name}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span className={`stack-tag ${s.h ? "highlight" : ""}`} key={s.t}>{s.t}</span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <div className="project-metric">{p.metric}</div>
                <div className="project-type">{p.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { EXPERIENCE } from "../data.jsx";

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-container">
        <div className="section-label reveal">Work History</div>
        <h2 className="section-title reveal">Experience</h2>
        <div className="exp-timeline reveal reveal-delay-2">
          {EXPERIENCE.map((exp, i) => (
            <div className="exp-item" key={i}>
              <div className={`exp-dot ${exp.color === "violet" ? "violet" : ""}`}></div>
              <div className="exp-meta">
                <span style={exp.color === "violet" ? { color: "var(--violet)" } : undefined}>
                  {exp.role}
                </span>
                <span className="period">{exp.period}</span>
              </div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-role">{exp.type}</div>
              <span
                className="exp-type"
                style={
                  exp.color === "violet"
                    ? { color: "var(--violet)", borderColor: "rgba(124,58,237,0.3)", background: "var(--violet-dim)" }
                    : undefined
                }
              >
                {exp.badge}
              </span>
              <ul className="exp-bullets">
                {exp.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

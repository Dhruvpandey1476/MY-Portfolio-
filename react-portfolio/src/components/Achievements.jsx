import { ACHIEVEMENTS, CERTS } from "../data.jsx";

const DELAY_CLASSES = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3", "reveal-delay-4"];

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="section-container">
        <div className="section-label reveal">Recognition</div>
        <h2 className="section-title reveal">
          Achievements &amp; <span style={{ color: "var(--cyan)" }}>Certifications</span>
        </h2>
        <div className="achievements-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <div className={`achievement-card reveal ${DELAY_CLASSES[i % DELAY_CLASSES.length]}`} key={a.title}>
              <div className={`achievement-icon ${a.color}`}>{a.icon}</div>
              <div>
                <div className="achievement-title">{a.title}</div>
                <div className="achievement-desc">{a.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem" }} className="reveal">
          <div className="section-label" style={{ marginBottom: "1rem" }}>Certifications</div>
          <div className="certs-grid">
            {CERTS.map((c) => (
              <span className="cert-chip" key={c}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

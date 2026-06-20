import { ABOUT_CARDS } from "../data.jsx";

export default function About() {
  return (
    <section id="about">
      <div className="section-container">
        <div className="section-label reveal">About</div>
        <div className="about-grid">
          <div className="reveal">
            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
              Building AI that <span style={{ color: "var(--cyan)" }}>solves real problems</span>
            </h2>
            <div className="about-text">
              <p>
                I&apos;m a <span className="about-highlight">B.Tech CSE student at ABES Institute of Technology</span> (2024–2028),
                currently interning as Gen AI Developer at ve-lyra labs. I build production-grade AI systems not just Jupyter notebooks.
              </p>
              <p>
                My focus is on <strong>agentic AI architectures</strong>, <strong>multimodal deep learning</strong>, and{" "}
                <strong>data science pipelines</strong> that create measurable impact. From real-time computer vision models to
                LLM-powered multi-agent workflows, I ship end-to-end systems.
              </p>
              <p>
                When I&apos;m not building, I&apos;m contributing to open source (GSSoC 2026), competing in AI/ML hackathons, and writing
                technical deep-dives on topics like GraphRAG and token optimisation.
              </p>
            </div>
          </div>
          <div className="about-cards reveal reveal-delay-2">
            {ABOUT_CARDS.map((card, i) => (
              <div className="about-card" key={i}>
                <span className="about-card-icon">{card.icon}</span>
                <div className="about-card-title">{card.title}</div>
                <div className="about-card-text">{card.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { STATS, LINKS } from "../data.jsx";

const PHRASES = [
  "AI/ML Engineer",
  "Data Scientist",
  "Agentic AI Builder",
  "LangGraph Architect",
  "NLP Dev",
  "RAG Systems Engineer",
];

function useTypewriter() {
  const [text, setText] = useState("");

  useEffect(() => {
    let pi = 0, ci = 0, deleting = false, timeoutId;

    const tick = () => {
      const phrase = PHRASES[pi];
      if (!deleting) {
        setText(phrase.slice(0, ci + 1));
        ci++;
        if (ci === phrase.length) {
          timeoutId = setTimeout(() => { deleting = true; tick(); }, 1800);
          return;
        }
      } else {
        setText(phrase.slice(0, ci - 1));
        ci--;
        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % PHRASES.length;
        }
      }
      timeoutId = setTimeout(tick, deleting ? 50 : 80);
    };

    timeoutId = setTimeout(tick, 1200);
    return () => clearTimeout(timeoutId);
  }, []);

  return text;
}

function useNeuralCanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let nodes = [];
    let animFrame;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function initNodes() {
      nodes = [];
      const count = Math.floor((canvas.width * canvas.height) / 18000);
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 2 + 1,
        });
      }
    }

    function drawNeural() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const maxDist = 140;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,212,255,0.6)";
        ctx.fill();
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x, dy = n.y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(0,212,255,${0.12 * (1 - dist / maxDist)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animFrame = requestAnimationFrame(drawNeural);
    }

    resizeCanvas();
    initNodes();
    drawNeural();

    const onResize = () => { resizeCanvas(); initNodes(); };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", onResize);
    };
  }, [canvasRef]);
}

function useCountUp() {
  useEffect(() => {
    const statNumbers = document.querySelectorAll(".stat-number[data-count]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target;
            const target = parseInt(el.dataset.count, 10);
            let startTime = null;
            const duration = 1800;
            const step = (ts) => {
              if (!startTime) startTime = ts;
              const progress = Math.min((ts - startTime) / duration, 1);
              const ease = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.floor(ease * target);
              if (progress < 1) requestAnimationFrame(step);
              else el.textContent = target;
            };
            requestAnimationFrame(step);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    statNumbers.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Hero() {
  const canvasRef = useRef(null);
  const typed = useTypewriter();
  useNeuralCanvas(canvasRef);
  useCountUp();

  return (
    <section id="hero">
      <canvas id="neural-canvas" ref={canvasRef}></canvas>
      <div className="hero-gradient"></div>
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-eyebrow">Available for internships, jobs &amp; freelance</div>
          <h1 className="hero-name">Dhruv<br /><span className="accent">Pandey</span></h1>
          <div className="hero-title">
            <span id="typed-text">{typed}</span><span className="typed-cursor">|</span>
          </div>
          <p className="hero-bio">
            <strong>AI/ML Engineer &amp; Data Scientist</strong> building production-ready agentic systems, RAG pipelines, and deep learning models. Specialising in <strong>LangGraph multi-agent architectures</strong>, computer vision, and GenAI applications that ship — not just prototypes.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <span>🚀</span> View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              <span>💬</span> Get in Touch
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <span>⭐</span> GitHub
            </a>
            <a href="/Dhruv_Pandey_Resume.pdf" download="Dhruv_Pandey_Resume.pdf" className="btn-resume">
              <span>📄</span> Download Resume
            </a>
          </div>
          <div className="hero-stats">
            {STATS.map((s, i) => (
              <div className="stat-item" key={i}>
                <div className="stat-number" data-count={s.count}>0</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-photo-wrapper">
          <div className="hero-photo-bg"></div>
          <div className="hero-photo-card">
            <img
              src="/dhruv3.png"
              alt="Dhruv Pandey"
              onError={(e) => {
                e.currentTarget.src =
                  "https://ui-avatars.com/api/?name=Dhruv+Pandey&size=400&background=131929&color=00D4FF&font-size=0.4&bold=true";
              }}
            />
            <div className="hero-photo-overlay">
              <div className="hero-badge"><span className="dot"></span> Open to Work</div>
              <div className="hero-location">📍 Ghaziabad, India</div>
            </div>
          </div>
          <div className="floating-chip chip-1">🤖 LangGraph</div>
          <div className="floating-chip chip-2">📊 XGBoost</div>
          <div className="floating-chip chip-3">🧠 PyTorch</div>
        </div>
      </div>
    </section>
  );
}

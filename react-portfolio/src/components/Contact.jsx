import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT_LINKS, LINKS } from "../data.jsx";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // null | { type: 'success'|'error', text: string }
  const [sending, setSending] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async () => {
    setStatus(null);

    if (!name || !email || !subject || !message) {
      setStatus({ type: "error", text: "⚠ Please fill in all fields." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: "error", text: "⚠ Please enter a valid email address." });
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          subject,
          message,
          to_name: "Dhruv",
        },
        PUBLIC_KEY
      );
      setStatus({ type: "success", text: "✅ Message sent! I'll get back to you within 24 hours." });
      setName(""); setEmail(""); setSubject(""); setMessage("");
    } catch {
      const mailto = `mailto:${LINKS.email}?subject=${encodeURIComponent(
        subject + " from " + name
      )}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message)}`;
      window.location.href = mailto;
      setStatus({ type: "success", text: "📧 Opening your mail client as fallback. Add your EmailJS keys for direct sending." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      <div className="section-container">
        <div className="section-label reveal">Get in Touch</div>
        <h2 className="section-title reveal">
          Let&apos;s <span style={{ color: "var(--cyan)" }}>Work Together</span>
        </h2>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <p className="contact-intro">
              Open to <strong>AI/ML internships</strong>, <strong>full-time role</strong>, <strong>remote jobs</strong>,<strong>freelance AI/ML projects</strong>, and{" "}
              <strong>open-source collaborations</strong>. Whether it&apos;s building an agentic system, a data pipeline,
              or a full-stack AI product — let&apos;s connect.
            </p>
            <div className="contact-links">
              {CONTACT_LINKS.map((c) => (
                <a
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="contact-link-item"
                  key={c.label}
                >
                  <div className="contact-link-icon">{c.icon}</div>
                  <div className="contact-link-text">
                    <div className="contact-link-label">{c.label}</div>
                    <div className="contact-link-value">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form reveal reveal-delay-2" ref={formRef}>
            <div className="form-title">Send a Message</div>
            <div className="form-sub">// I usually reply within 24 hours</div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="f-name">Name</label>
                <input
                  className="form-input"
                  type="text"
                  id="f-name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="f-email">Email</label>
                <input
                  className="form-input"
                  type="email"
                  id="f-email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="f-subject">Opportunity Type</label>
              <select
                className="form-select"
                id="f-subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <option value="">Select type...</option>
                <option value="Internship Opportunity">Internship Opportunity</option>
                <option value="Freelance Project">Freelance Project</option>
                <option value="Collaboration / Open Source">Collaboration / Open Source</option>
                <option value="Job Offer">Job Offer</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="f-msg">Message</label>
              <textarea
                className="form-textarea"
                id="f-msg"
                placeholder="Tell me about the project, role, or idea..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button className="btn-submit" onClick={handleSubmit} disabled={sending}>
              <span>{sending ? "Sending..." : "Send Message 🚀"}</span>
            </button>
            {status && (
              <div className={`form-status ${status.type}`} style={{ display: "block" }}>
                {status.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

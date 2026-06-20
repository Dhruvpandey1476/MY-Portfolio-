import { LINKS } from "../data.jsx";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">DP<span>.</span></div>
        <div className="footer-copy">© 2026 Dhruv Pandey · Built with intention, shipped with care</div>
        <div className="footer-socials">
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="footer-social">⭐</a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social">💼</a>
          <a href={LINKS.twitter} target="_blank" rel="noopener noreferrer" className="footer-social">𝕏</a>
          <a href={`mailto:${LINKS.email}`} className="footer-social">📧</a>
        </div>
      </div>
    </footer>
  );
}

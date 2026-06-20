import { useState, useEffect } from "react";
import { NAV_ITEMS } from "../data.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`} id="mobile-nav">
        <button className="mobile-nav-close" onClick={closeMobile}>✕</button>
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMobile}>
            {item.label}
          </a>
        ))}
        <a href="#contact" onClick={closeMobile}>Contact</a>
      </div>

      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <div className="nav-logo">DP<span>.</span></div>
        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <li><a href="#contact" className="nav-cta">Let&apos;s Talk</a></li>
        </ul>
        <div className="nav-hamburger" onClick={() => setMobileOpen(true)}>
          <span></span><span></span><span></span>
        </div>
      </nav>
    </>
  );
}

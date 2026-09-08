import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

export default function SiteHeader({ content, nav, active, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const initials = content.identity.initials || "TT";

  useEffect(() => {
    const header = document.querySelector(".site-header");
    const viewport = window.visualViewport;
    if (!header) return undefined;

    const pin = () => {
      const offset = viewport ? viewport.offsetTop : 0;
      header.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    pin();
    viewport?.addEventListener("scroll", pin);
    viewport?.addEventListener("resize", pin);
    window.addEventListener("scroll", pin, { passive: true });
    return () => {
      viewport?.removeEventListener("scroll", pin);
      viewport?.removeEventListener("resize", pin);
      window.removeEventListener("scroll", pin);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="wrap">
        <nav className="site-nav" aria-label="Primary">
          <a className="brand display" href="#top">
            {initials}
            <span>.</span>
          </a>
          <div className="nav-links">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={active === item.id ? "active" : ""}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              type="button"
              className="icon-btn mobile-menu-btn"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </nav>
        <div className={`mobile-menu${open ? " open" : ""}`}>
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

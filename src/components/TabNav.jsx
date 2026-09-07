import ThemeToggle from "./ThemeToggle.jsx";

const TABS = [
  { id: "resume", label: "Resume" },
  { id: "work", label: "Work" },
  { id: "highlights", label: "Highlights" },
  { id: "contact", label: "Contact" },
];

export default function TabNav({ active, onChange, theme, onToggleTheme }) {
  return (
    <div className="tab-nav-wrap">
      <span aria-hidden="true" />
      <div className="tab-nav">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`tab-btn ${active === t.id ? "active" : ""}`}
            onClick={() => onChange(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </div>
  );
}

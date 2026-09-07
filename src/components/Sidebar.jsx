import {
  MailIcon,
  MapPinIcon,
  ClockIcon,
  FileTextIcon,
  BrandLinkedIn,
  BrandGitHub,
  BrandEmail,
  ExternalLinkIcon,
} from "./icons.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const ICONS = {
  mail: MailIcon,
  map: MapPinIcon,
  clock: ClockIcon,
};

export default function Sidebar({ content, theme, onToggleTheme }) {
  const { identity, rail, links } = content;
  const metaVisible = rail.meta.filter((m) => m.visible);
  const locationMeta = metaVisible.find((m) => m.id === "location");
  const timezoneMeta = metaVisible.find((m) => m.id === "timezone");

  return (
    <aside className="sidebar">
      <div className="sidebar-mobile-toggle">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>

      <div className="avatar">{identity.initials}</div>
      <h1 className="identity-name">{identity.name}</h1>
      <span className="identity-badge">{identity.title}</span>

      <div className="sidebar-divider" />

      <div className="meta-list">
        {metaVisible.map((m) => {
          const Icon = ICONS[m.icon] || MailIcon;
          return (
            <div className={`meta-row meta-row--${m.id}`} key={m.id}>
              <span className="meta-icon">
                <Icon />
              </span>
              <span className="meta-text">
                <span className="meta-label">{m.label}</span>
                <span className="meta-value">{m.value}</span>
              </span>
            </div>
          );
        })}

        {locationMeta && timezoneMeta && (
          <div className="meta-row meta-row-merged">
            <span className="meta-icon">
              <MapPinIcon />
            </span>
            <span className="meta-text">
              <span className="meta-label">{locationMeta.label}</span>
              <span className="meta-value">
                {locationMeta.value} · {timezoneMeta.value}
              </span>
            </span>
          </div>
        )}
      </div>

      <div className="sidebar-spacer" />

      {links.resume && (
        <a
          className="resume-btn"
          href={links.resume.href}
          target="_blank"
          rel="noreferrer"
        >
          <FileTextIcon />
          {links.resume.label}
        </a>
      )}

      <div className="social-list">
        {links.linkedin && (
          <a
            className="social-row"
            href={links.linkedin.href}
            target="_blank"
            rel="noreferrer"
          >
            <BrandLinkedIn />
            {links.linkedin.label}
            <ExternalLinkIcon className="ext-icon" />
          </a>
        )}
        {links.github && (
          <a
            className="social-row"
            href={links.github.href}
            target="_blank"
            rel="noreferrer"
          >
            <BrandGitHub />
            {links.github.label}
            <ExternalLinkIcon className="ext-icon" />
          </a>
        )}
        {links.email && (
          <a className="social-row" href={links.email.href}>
            <BrandEmail />
            {links.email.label}
            <ExternalLinkIcon className="ext-icon" />
          </a>
        )}
      </div>

      {/* Mobile-only: the four actions above collapse into one icon row. */}
      <div className="icon-row">
        {links.resume && (
          <a
            className="icon-row-btn is-primary"
            href={links.resume.href}
            target="_blank"
            rel="noreferrer"
            aria-label={links.resume.label}
          >
            <FileTextIcon />
          </a>
        )}
        {links.linkedin && (
          <a
            className="icon-row-btn"
            href={links.linkedin.href}
            target="_blank"
            rel="noreferrer"
            aria-label={links.linkedin.label}
          >
            <BrandLinkedIn />
          </a>
        )}
        {links.github && (
          <a
            className="icon-row-btn"
            href={links.github.href}
            target="_blank"
            rel="noreferrer"
            aria-label={links.github.label}
          >
            <BrandGitHub />
          </a>
        )}
        {links.email && (
          <a
            className="icon-row-btn"
            href={links.email.href}
            aria-label={links.email.label}
          >
            <BrandEmail />
          </a>
        )}
      </div>
    </aside>
  );
}

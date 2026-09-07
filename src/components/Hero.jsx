import {
  ArrowRightIcon,
  BrandGitHub,
  BrandLinkedIn,
  FileTextIcon,
  MailIcon,
} from "./icons.jsx";

export default function Hero({ content }) {
  const { identity, links } = content;
  const [first, ...rest] = identity.name.split(" ");

  return (
    <section className="hero">
      <div className="grid-paper" />
      <div className="hero-glow" />
      <div className="wrap hero-grid">
        <div className="reveal">
          <p className="hero-kicker">
            <i />
            {identity.differentiator}
          </p>
          <h1 className="display">
            {first}
            <br />
            <em>{rest.join(" ")}.</em>
          </h1>
          <p className="hero-role">{identity.title} — Java, Go, AdTech / DSP</p>
          <p className="hero-lead">{identity.summary}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View projects
              <ArrowRightIcon />
            </a>
            <a
              className="btn btn-ghost"
              href={links.resume.href}
              target="_blank"
              rel="noreferrer"
            >
              {links.resume.label}
              <FileTextIcon />
            </a>
          </div>
          <div className="hero-socials">
            {links.github && (
              <a href={links.github.href} target="_blank" rel="noreferrer" aria-label="GitHub">
                <BrandGitHub />
              </a>
            )}
            {links.linkedin && (
              <a href={links.linkedin.href} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <BrandLinkedIn />
              </a>
            )}
            {links.email && (
              <a href={links.email.href} aria-label="Email">
                <MailIcon />
              </a>
            )}
          </div>
        </div>

        <aside className="glance reveal">
          <div className="glance-head">
            <span>At a glance</span>
            <span className="glance-loc">
              <i />
              {identity.location}
            </span>
          </div>
          <div className="glance-grid">
            <div>
              <strong className="display">
                2<span>+</span>
              </strong>
              <p>years experience</p>
            </div>
            <div>
              <strong className="display">2</strong>
              <p>AdTech companies</p>
            </div>
            <div>
              <strong className="display">
                Java<span className="accent">/</span>Go
              </strong>
              <p>primary stack</p>
            </div>
            <div>
              <strong className="display">
                15<span>+</span>
              </strong>
              <p>systems shipped</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

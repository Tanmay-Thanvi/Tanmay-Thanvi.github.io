import {
  BrandGitHub,
  BrandLinkedIn,
  FileTextIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "./icons.jsx";

export default function SiteFooter({ content }) {
  const { identity, links, copy } = content;

  return (
    <footer id="contact" className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <p className="eyebrow">08 / Contact</p>
            <h2 className="display">{copy.contactHeadline}</h2>
            <a className="footer-mail" href={links.email.href}>
              {identity.email}
              <ArrowRightIcon />
            </a>
          </div>
          <div className="footer-links">
            <span>
              <MapPinIcon /> {identity.location}
            </span>
            {links.linkedin && (
              <a href={links.linkedin.href} target="_blank" rel="noreferrer">
                <BrandLinkedIn /> LinkedIn
              </a>
            )}
            {links.github && (
              <a href={links.github.href} target="_blank" rel="noreferrer">
                <BrandGitHub /> GitHub
              </a>
            )}
            {links.resume && (
              <a href={links.resume.href} target="_blank" rel="noreferrer">
                <FileTextIcon /> {links.resume.label}
              </a>
            )}
          </div>
        </div>
        <div className="footer-base">
          <span>
            © {new Date().getFullYear()} {identity.name}
          </span>
          <span>
            Backend engineering · {identity.city}
          </span>
        </div>
      </div>
    </footer>
  );
}

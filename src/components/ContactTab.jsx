import { useState } from "react";
import { SendIcon, ArrowRightIcon, ShieldIcon } from "./icons.jsx";

export default function ContactTab({ content }) {
  const { copy, identity } = content;
  const email = identity.email;

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio contact from ${form.name || "a visitor"}`;
    const bodyLines = [];
    if (form.email) bodyLines.push(`Reply to: ${form.email}`, "");
    bodyLines.push(form.message || "");
    const body = bodyLines.join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const quickCallHref = `mailto:${email}?subject=${encodeURIComponent(
    "Quick call request"
  )}&body=${encodeURIComponent(
    "Hi Tanmay,\n\nI'd like to set up a quick call to discuss...\n"
  )}`;

  return (
    <section className="section">
      <h2 className="section-title">Contact</h2>

      <p className="contact-lead">{copy?.contactHeadline}</p>
      {copy?.contactBody && <p className="contact-subline">{copy.contactBody}</p>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="form-label" htmlFor="cf-name">
            Your name
          </label>
          <input
            id="cf-name"
            className="form-input"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={update("name")}
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="cf-email">
            Your email
          </label>
          <input
            id="cf-email"
            className="form-input"
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={update("email")}
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="cf-message">
            What would you like to discuss?
          </label>
          <textarea
            id="cf-message"
            className="form-textarea"
            placeholder="Tell me about the role, team, or problem you're solving…"
            rows={4}
            value={form.message}
            onChange={update("message")}
            required
          />
        </div>

        <button type="submit" className="form-submit-btn">
          <SendIcon />
          Send message
        </button>
      </form>

      <a className="contact-secondary" href={quickCallHref}>
        Prefer a quick call? Email me to set one up
        <ArrowRightIcon />
      </a>

      <p className="contact-note">
        <ShieldIcon />
        Your details are only used to reply to this message.
      </p>
    </section>
  );
}

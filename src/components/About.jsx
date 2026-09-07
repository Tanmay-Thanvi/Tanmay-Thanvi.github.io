export default function About({ content }) {
  return (
    <section id="about" className="block">
      <div className="wrap about-grid">
        <div className="reveal">
          <p className="eyebrow">01 / About</p>
          <h2 className="display section-title">
            Built for
            <br />
            the long run.
          </h2>
        </div>
        <div className="about-copy reveal">
          <p>{content.identity.oneLiner}</p>
          <p>{content.copy.exceptionalAbility}</p>
          {content.copy.aboutMore && <p>{content.copy.aboutMore}</p>}
        </div>
      </div>
    </section>
  );
}

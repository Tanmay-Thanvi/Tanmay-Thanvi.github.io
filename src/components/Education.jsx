export default function Education({ content }) {
  const items = (content.education || []).filter((e) => e.visible);

  return (
    <section className="block">
      <div className="wrap">
        <div className="reveal">
          <p className="eyebrow">07 / Education</p>
          <h2 className="display section-title">The foundation.</h2>
        </div>
        <div className="edu-grid">
          {items.map((ed) => (
            <article className="card edu-card reveal" key={ed.id}>
              <p className="card-date">
                {ed.datesLong || ed.dates}
                {ed.score ? ` · ${ed.score}` : ""}
              </p>
              <h3 className="display">{ed.degree}</h3>
              <p>
                {ed.full || ed.school}
                {ed.location ? `, ${ed.location}` : ""}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

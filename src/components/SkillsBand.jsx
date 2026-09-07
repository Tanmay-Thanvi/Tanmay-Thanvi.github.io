export default function SkillsBand({ content }) {
  const groups = (content.skills || []).filter((s) => s.visible);

  return (
    <section id="skills" className="block skills-block">
      <div className="wrap">
        <div className="skills-head reveal">
          <div>
            <p className="eyebrow">02 / Capabilities</p>
            <h2 className="display section-title">The working toolkit.</h2>
          </div>
          <p>Languages, backend, data, and the systems I use to ship AdTech services.</p>
        </div>
        <div className="skills-grid">
          {groups.map((group) => (
            <article className="skill-card reveal" key={group.id}>
              <h3>{group.label}</h3>
              <div className="chips">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

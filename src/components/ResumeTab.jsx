import { CalendarIcon, StarIcon, DiamondIcon } from "./icons.jsx";
import Mark from "./Mark.jsx";

export default function ResumeTab({ content, theme }) {
  const experience = (content.experience || []).filter((e) => e.visible);
  const skills = (content.skills || []).filter((s) => s.visible);
  const education = (content.education || []).filter((e) => e.visible);
  const topSkills = new Set(content.skillsOnPage || []);

  return (
    <div>
      <section className="section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-groups">
          {skills.map((group) => (
            <div key={group.id}>
              <div className="skills-group-label">{group.label}</div>
              <div className="tag-row">
                {group.items.map((item) => {
                  const isTop = topSkills.has(item);
                  return (
                    <span
                      className={`tag ${isTop ? "tag-top" : ""}`}
                      key={item}
                    >
                      {isTop && <DiamondIcon />}
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
          {skills.length === 0 && (
            <p className="empty-state">Nothing to show yet.</p>
          )}
          {topSkills.size > 0 && (
            <p className="skills-legend">
              <DiamondIcon /> Top skills
            </p>
          )}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Experience</h2>
        <div className="entry-list">
          {experience.map((e) => (
            <div className="entry-card" key={e.id}>
              <Mark
                logoUrl={e.logoUrl}
                logoUrlDark={e.logoUrlDark}
                logoFill={e.logoFill}
                mark={e.mark}
                alt={e.company}
                theme={theme}
              />
              <div className="entry-main">
                <div className="entry-top">
                  <div className="entry-top-left">
                    <span className="entry-company">{e.company}</span>
                    {e.current && (
                      <span className="entry-current">
                        {content.copy?.currentBadge || "Current"}
                      </span>
                    )}
                  </div>
                  <span className="entry-dates">
                    <CalendarIcon />
                    {e.dates}
                  </span>
                </div>
                <div className="entry-role">{e.role}</div>
                {e.summary && <p className="entry-summary">{e.summary}</p>}
                {e.stack?.length > 0 && (
                  <div className="tag-row">
                    {e.stack.map((s) => (
                      <span className="tag" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {experience.length === 0 && (
            <p className="empty-state">Nothing to show yet.</p>
          )}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="entry-list">
          {education.map((ed) => (
            <div className="entry-card" key={ed.id}>
              <Mark
                logoUrl={ed.logoUrl}
                mark={ed.mark}
                alt={ed.school}
                theme={theme}
              />
              <div className="entry-main">
                <div className="entry-top">
                  <div className="entry-top-left">
                    <span className="entry-company">{ed.school}</span>
                  </div>
                  <span className="entry-dates">
                    <CalendarIcon />
                    {ed.dates}
                  </span>
                </div>
                <div className="entry-role">{ed.degree}</div>
                {ed.score && (
                  <div className="entry-score">
                    <StarIcon />
                    {ed.score}
                  </div>
                )}
              </div>
            </div>
          ))}
          {education.length === 0 && (
            <p className="empty-state">Nothing to show yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}

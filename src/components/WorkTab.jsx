import { ExternalLinkIcon, ImageIcon } from "./icons.jsx";

function Screenshot({ src, alt }) {
  if (src) {
    return (
      <div className="work-shot">
        <img src={src} alt={alt} />
      </div>
    );
  }
  return (
    <div className="work-shot work-shot--empty">
      <ImageIcon />
      <span>Add screenshot</span>
    </div>
  );
}

function WorkCard({ item, showShot }) {
  const metrics = (item.metrics || []).filter((m) => m.safeToPublish);
  return (
    <div className="work-card">
      {showShot && <Screenshot src={item.screenshot} alt={item.name} />}
      <div className="work-top">
        <div>
          <div className="work-name-row">
            <span className="work-name">
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.name}
                  <ExternalLinkIcon />
                </a>
              ) : (
                item.name
              )}
            </span>
          </div>
          <div className="work-role">{item.role}</div>
        </div>
      </div>
      {item.text && <p className="work-text">{item.text}</p>}
      {item.stack?.length > 0 && (
        <div className="tag-row">
          {item.stack.map((s) => (
            <span className="tag" key={s}>
              {s}
            </span>
          ))}
        </div>
      )}
      {metrics.length > 0 && (
        <div className="work-metrics">
          {metrics.map((m) => (
            <span className="work-metric" key={m.label}>
              {m.value} {m.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

const GROUPS = [
  { id: "company", title: "Company work" },
  { id: "side", title: "Side projects" },
  { id: "personal", title: "Personal projects" },
];

export default function WorkTab({ content }) {
  const work = (content.work || []).filter(
    (w) => w.visible && w.safeToPublish
  );
  const featured = work.filter((w) => w.featured).slice(0, 3);
  const featuredIds = new Set(featured.map((w) => w.id));
  const groups = GROUPS.map((group) => ({
    ...group,
    items: work.filter((w) => w.kind === group.id && !featuredIds.has(w.id)),
  })).filter((group) => group.items.length > 0);

  return (
    <>
      {featured.length > 0 && (
        <section className="section">
          <h2 className="section-title">Featured</h2>
          <div className="work-featured-grid">
            {featured.map((w) => (
              <WorkCard item={w} showShot key={w.id} />
            ))}
          </div>
        </section>
      )}

      {groups.map((group) => (
        <section className="section" key={group.id}>
          <h2 className="section-title">{group.title}</h2>
          <div className="work-list">
            {group.items.map((w) => (
              <WorkCard item={w} showShot={false} key={w.id} />
            ))}
          </div>
        </section>
      ))}

      {featured.length === 0 && groups.length === 0 && (
        <p className="empty-state">Nothing to show yet.</p>
      )}
    </>
  );
}

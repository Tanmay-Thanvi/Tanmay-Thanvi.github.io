import { TrophyIcon } from "./icons.jsx";

export default function Recognition({ content }) {
  const items = (content.highlights?.achievements || []).filter((i) => i.visible);
  const certs = (content.certifications || []).filter((c) => c.visible);

  return (
    <section className="block recog-block">
      <div className="wrap recog-grid">
        <div className="reveal">
          <p className="eyebrow">06 / Recognition</p>
          <h2 className="display section-title">
            Work that got
            <br />
            noticed.
          </h2>
        </div>
        <div className="recog-list reveal">
          {items.map((item) => (
            <div className="recog-item" key={item.id}>
              <TrophyIcon />
              <div>
                <h3>{item.title}</h3>
                <p>
                  {item.subtitle}
                  {item.meta ? ` · ${item.meta}` : ""}
                </p>
              </div>
            </div>
          ))}
          {certs.slice(0, 3).map((c) => (
            <div className="recog-item" key={c.id}>
              <TrophyIcon />
              <div>
                <h3>{c.name}</h3>
                <p>
                  {c.issuer}
                  {c.issued ? ` · ${c.issued}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

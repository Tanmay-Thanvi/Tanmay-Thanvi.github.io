import { TrophyIcon } from "./icons.jsx";

export default function Recognition({ content }) {
  const items = (content.highlights?.achievements || []).filter((i) => i.visible);

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
                {(item.subtitle || item.meta) && (
                  <p>
                    {[item.subtitle, item.meta].filter(Boolean).join(" · ")}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

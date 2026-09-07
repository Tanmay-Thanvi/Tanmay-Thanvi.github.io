import { useMemo, useState } from "react";
import { ExternalLinkIcon } from "./icons.jsx";
import RichText from "./RichText.jsx";

function visibleWork(content) {
  return (content.work || []).filter((w) => w.visible && w.safeToPublish);
}

function kindLabel(kind) {
  if (kind === "side" || kind === "open-source") return "Open source";
  if (!kind) return "";
  return kind.replace(/-/g, " ");
}

export default function Projects({ content }) {
  const [query, setQuery] = useState("");
  const work = visibleWork(content);
  const featuredWork = work.filter((w) => w.featured);
  const oss = (content.highlights?.openSource || []).filter((i) => i.visible);
  const featuredOss = oss.filter((i) => i.featured);

  const FEATURED_ORDER = ["prebid-server-video", "image-piracy", "mcp-graphql"];
  const featured = [
    ...featuredWork,
    ...featuredOss.map((item) => ({
      id: item.id,
      name: item.name,
      role: item.kind,
      kind: "open-source",
      text: item.text,
      stack: item.stack,
      href: item.href,
    })),
  ].sort((a, b) => {
    const ia = FEATURED_ORDER.indexOf(a.id);
    const ib = FEATURED_ORDER.indexOf(b.id);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });
  const featuredIdList = featured.map((item) => item.id).join("|");

  const history = useMemo(() => {
    const featuredIds = new Set(featuredIdList.split("|").filter(Boolean));
    const rest = work.filter((w) => w.kind !== "company" && !featuredIds.has(w.id));
    const extra = oss
      .filter((item) => !featuredIds.has(item.id))
      .map((item) => ({
        id: item.id,
        name: item.name,
        role: item.kind,
        text: item.text,
        stack: item.stack,
        href: item.href,
      }));
    const HISTORY_ORDER = [
      "config-server",
      "logo-crawler",
      "di-intellij-plugin",
      "terminal-portfolio",
      "reverse-coding",
      "pict-forum",
    ];
    const all = [...rest, ...extra].sort((a, b) => {
      const ia = HISTORY_ORDER.indexOf(a.id);
      const ib = HISTORY_ORDER.indexOf(b.id);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    });
    const q = query.trim().toLowerCase();
    if (!q) return all;
    return all.filter((item) =>
      `${item.name} ${item.role} ${item.text} ${(item.stack || []).join(" ")}`
        .toLowerCase()
        .includes(q)
    );
  }, [featuredIdList, oss, query, work]);

  return (
    <section id="projects" className="block">
      <div className="wrap">
        <div className="projects-head reveal">
          <div>
            <p className="eyebrow">04 / Selected work</p>
            <h2 className="display section-title">
              Recent, flagship,
              <br />
              high stakes.
            </h2>
          </div>
          <p>
            Systems I can walk through in an interview — gateway work, AI tooling, and open source.
          </p>
        </div>

        <div className="featured-grid">
          {featured.map((item) => (
            <article className="card reveal" key={item.id}>
              <div className="card-top">
                <div className="card-mark">{item.name[0]}</div>
                <span className="card-date">{item.role}</span>
              </div>
              <p className="card-kicker">{kindLabel(item.kind)}</p>
              <h3 className="display">
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.name} <ExternalLinkIcon />
                  </a>
                ) : (
                  item.name
                )}
              </h3>
              <p>
                <RichText text={item.text} />
              </p>
              <div className="tags">
                {(item.stack || []).map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="history-head reveal">
          <div>
            <p className="eyebrow">05 / Full project history</p>
            <h3 className="display section-title">Everything else.</h3>
          </div>
          <input
            className="filter"
            type="search"
            placeholder="Filter by tech or name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="history-grid">
          {history.map((item) => (
            <article className="card history-card reveal" key={item.id}>
              <div className="card-top">
                <span className="card-date">{item.role}</span>
              </div>
              <h3>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.name} <ExternalLinkIcon />
                  </a>
                ) : (
                  item.name
                )}
              </h3>
              <p>
                <RichText text={item.text} />
              </p>
              <p className="stack">{(item.stack || []).join(" · ")}</p>
            </article>
          ))}
          {history.length === 0 && <p className="card-date">No matching projects.</p>}
        </div>
      </div>
    </section>
  );
}

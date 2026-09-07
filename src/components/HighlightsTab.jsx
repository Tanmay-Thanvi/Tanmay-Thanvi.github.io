import { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import {
  CodeIcon,
  GitBranchIcon,
  ArchiveIcon,
  TrophyIcon,
  PenIcon,
  CheckIcon,
  ExternalLinkIcon,
  BrandGitHub,
} from "./icons.jsx";
import Mark from "./Mark.jsx";

const CALENDAR_THEME = {
  light: ["#ece9f5", "#6e56cf"],
  dark: ["#332c44", "#b49cff"],
};

const SUB_TABS = [
  { id: "open-source", label: "Open Source" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "writing", label: "Blogs / Posts" },
];

const STATUS_LABEL = {
  merged: "Merged",
  published: "Published",
  "in-progress": "In Progress",
};

function githubUsername(href) {
  if (!href) return null;
  const match = href.match(/github\.com\/([^/?#]+)/i);
  return match ? match[1] : null;
}

export default function HighlightsTab({ content, theme }) {
  const [subTab, setSubTab] = useState("open-source");
  const highlights = content.highlights || {};
  const openSource = (highlights.openSource || []).filter((i) => i.visible);
  const achievements = (highlights.achievements || []).filter((i) => i.visible);
  const blogPosts = (highlights.blogPosts || []).filter((i) => i.visible);
  const certifications = (content.certifications || []).filter((i) => i.visible);

  const contributions = openSource.length;
  const mergedPRs = openSource.filter((i) => i.status === "merged").length;
  const repositories = new Set(openSource.map((i) => i.repo).filter(Boolean)).size;

  const username = githubUsername(content.links?.github?.href);

  // What the right rail shows for each sub-tab: the mini versions of the
  // *other two* categories, so switching tabs always surfaces something new.
  const sidePanels = {
    "open-source": {
      title: "Open Source",
      icon: CodeIcon,
      empty: openSource.length === 0,
      items: openSource.slice(0, 3).map((item) => (
        <div className="hl-side-card" key={item.id}>
          <Mark logoUrl={item.logoUrl} mark={item.mark} alt={item.name} theme={theme} />
          <div>
            <div className="hl-side-card-title">{item.name}</div>
            <div className="hl-side-card-sub">{item.kind}</div>
          </div>
        </div>
      )),
    },
    certifications: {
      title: "Certifications",
      icon: TrophyIcon,
      empty: certifications.length === 0,
      items: certifications.slice(0, 3).map((c) => (
        <div className="hl-side-card" key={c.id}>
          <Mark logoUrl={c.logoUrl} mark={c.name?.[0] || "C"} alt={c.name} theme={theme} />
          <div>
            <div className="hl-side-card-title">{c.name}</div>
            <div className="hl-side-card-sub">{c.issuer}</div>
          </div>
        </div>
      )),
    },
    achievements: {
      title: "Achievements",
      icon: TrophyIcon,
      empty: achievements.length === 0,
      items: achievements.slice(0, 3).map((a) => (
        <div className="hl-side-card" key={a.id}>
          <span className="entry-mark">
            <TrophyIcon />
          </span>
          <div>
            <div className="hl-side-card-title">{a.title}</div>
            <div className="hl-side-card-sub">{a.subtitle}</div>
          </div>
        </div>
      )),
    },
    writing: {
      title: "Latest blogs / posts",
      icon: PenIcon,
      empty: blogPosts.length === 0,
      items: blogPosts.slice(0, 2).map((post) => (
        <div className="hl-side-card" key={post.id}>
          <span className="entry-mark">
            <PenIcon />
          </span>
          <div>
            <div className="hl-side-card-title">
              {post.href ? (
                <a href={post.href} target="_blank" rel="noreferrer">
                  {post.title}
                  <ExternalLinkIcon />
                </a>
              ) : (
                post.title
              )}
            </div>
            {(post.date || post.readTime) && (
              <div className="hl-side-card-meta">
                {[post.date, post.readTime].filter(Boolean).join(" · ")}
              </div>
            )}
          </div>
        </div>
      )),
    },
  };

  const otherPanels = SUB_TABS.filter((t) => t.id !== subTab)
    .map((t) => sidePanels[t.id])
    .slice(0, 2);

  return (
    <section className="section">
      <div className="hl-hero">
        <h2 className="hl-headline">{highlights.headline}</h2>
        {highlights.subline && <p className="hl-subline">{highlights.subline}</p>}

        <div className="tab-nav hl-subtabs">
          {SUB_TABS.map((t) => (
            <button
              key={t.id}
              className={`tab-btn ${subTab === t.id ? "active" : ""}`}
              onClick={() => setSubTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hl-layout">
        <div className="hl-main" key={`main-${subTab}`}>
          {subTab === "open-source" && (
            <>
              <div className="hl-stats">
                <div className="hl-stat">
                  <span className="hl-stat-icon">
                    <CodeIcon />
                  </span>
                  <span>
                    <span className="hl-stat-value">{contributions}</span>
                    <span className="hl-stat-label">contributions</span>
                  </span>
                </div>
                <div className="hl-stat">
                  <span className="hl-stat-icon">
                    <GitBranchIcon />
                  </span>
                  <span>
                    <span className="hl-stat-value">{mergedPRs}</span>
                    <span className="hl-stat-label">merged PRs</span>
                  </span>
                </div>
                <div className="hl-stat">
                  <span className="hl-stat-icon">
                    <ArchiveIcon />
                  </span>
                  <span>
                    <span className="hl-stat-value">{repositories}</span>
                    <span className="hl-stat-label">repositories</span>
                  </span>
                </div>
              </div>

              <div className="hl-item-list">
                {openSource.map((item) => (
                  <div className="work-card" key={item.id}>
                    <div className="work-top">
                      <div className="work-name-row">
                        <Mark
                          logoUrl={item.logoUrl}
                          mark={item.mark}
                          alt={item.name}
                          theme={theme}
                        />
                        <div>
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
                          <div className="work-role">{item.kind}</div>
                        </div>
                      </div>
                      {item.status && (
                        <span className={`hl-badge is-${item.status}`}>
                          {item.status === "merged" && <CheckIcon />}
                          {STATUS_LABEL[item.status] || item.status}
                        </span>
                      )}
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
                    {item.meta && <p className="hl-item-meta">{item.meta}</p>}
                  </div>
                ))}
                {openSource.length === 0 && (
                  <p className="empty-state">Nothing to show yet.</p>
                )}
              </div>

              {username && (
                <div className="hl-activity">
                  <div className="hl-activity-head">
                    <h3>Contribution activity</h3>
                    <span>Last 12 months</span>
                  </div>
                  <div className="hl-heatmap">
                    <GitHubCalendar
                      username={username}
                      year="last"
                      colorScheme={theme === "dark" ? "dark" : "light"}
                      theme={CALENDAR_THEME}
                      blockSize={11}
                      blockMargin={3}
                      fontSize={11}
                      showWeekdayLabels={false}
                      errorMessage="Couldn't load contribution activity."
                    />
                  </div>
                  <div className="hl-activity-links">
                    <a
                      href={content.links.github.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BrandGitHub />
                      View GitHub profile
                    </a>
                  </div>
                </div>
              )}
            </>
          )}

          {subTab === "certifications" && (
            <div className="hl-item-list">
              {certifications.map((c) => (
                <div className="work-card" key={c.id}>
                  <div className="work-top">
                    <div className="work-name-row">
                      <Mark
                        logoUrl={c.logoUrl}
                        mark={c.name?.[0] || "C"}
                        alt={c.name}
                        theme={theme}
                      />
                      <div>
                        <span className="work-name">{c.name}</span>
                        <div className="work-role">{c.issuer}</div>
                      </div>
                    </div>
                  </div>
                  {c.issued && <p className="hl-item-meta">Issued {c.issued}</p>}
                </div>
              ))}
              {certifications.length === 0 && (
                <p className="empty-state">Nothing to show yet.</p>
              )}
            </div>
          )}

          {subTab === "achievements" && (
            <div className="hl-item-list">
              {achievements.map((a) => (
                <div className="work-card" key={a.id}>
                  <div className="work-top">
                    <div className="work-name-row">
                      <span className="entry-mark">
                        <TrophyIcon />
                      </span>
                      <div>
                        <span className="work-name">{a.title}</span>
                        <div className="work-role">{a.subtitle}</div>
                      </div>
                    </div>
                  </div>
                  {a.meta && <p className="hl-item-meta">{a.meta}</p>}
                </div>
              ))}
              {achievements.length === 0 && (
                <p className="empty-state">Nothing to show yet.</p>
              )}
            </div>
          )}

          {subTab === "writing" && (
            <div className="hl-item-list">
              {blogPosts.map((post) => (
                <div className="work-card" key={post.id}>
                  <div className="work-top">
                    <div className="work-name-row">
                      <span className="work-name">
                        {post.href ? (
                          <a href={post.href} target="_blank" rel="noreferrer">
                            {post.title}
                            <ExternalLinkIcon />
                          </a>
                        ) : (
                          post.title
                        )}
                      </span>
                    </div>
                  </div>
                  {post.text && <p className="work-text">{post.text}</p>}
                  {(post.date || post.readTime) && (
                    <p className="hl-item-meta">
                      {[post.date, post.readTime].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </div>
              ))}
              {blogPosts.length === 0 && (
                <p className="empty-state">Nothing to show yet.</p>
              )}
            </div>
          )}
        </div>

        <aside className="hl-side" key={`side-${subTab}`}>
          {otherPanels.map((panel) => {
            const Icon = panel.icon;
            return (
              <div className="hl-side-panel" key={panel.title}>
                <h3 className="hl-side-title">
                  <Icon />
                  {panel.title}
                </h3>
                {panel.empty ? (
                  <p className="empty-state">Nothing to show yet.</p>
                ) : (
                  <div className="hl-side-list">{panel.items}</div>
                )}
              </div>
            );
          })}
        </aside>
      </div>
    </section>
  );
}

import RichText from "./RichText.jsx";
import { ExternalLinkIcon } from "./icons.jsx";

const LANES = [
  {
    id: "eng-init",
    label: "Engineering initiatives",
    hint: "Inventory team · versatility beyond core ownership",
  },
  {
    id: "team",
    label: "Inventory team",
    hint: "Core DSP inventory work",
  },
  {
    id: "request",
    label: "Requested by CMs & TAMs",
    hint: "Cross-team campaign alerting",
  },
  {
    id: "pubmatic-bidder",
    label: "Activate DSP",
    hint: "Bidder team · real-time bidding",
  },
];

function ProjectCard({ item }) {
  const inner = (
    <>
      <div className="job-project-top">
        <h4>
          {item.name}
          {item.href && <ExternalLinkIcon />}
        </h4>
        {item.featured && <span>Featured</span>}
      </div>
      {Array.isArray(item.text) ? (
        item.text.map((line) => (
          <p className="job-project-line" key={line}>
            <RichText text={line} />
          </p>
        ))
      ) : (
        <p>
          <RichText text={item.text} />
        </p>
      )}
      <p className="stack">{(item.stack || []).join(" · ")}</p>
    </>
  );

  if (item.href) {
    return (
      <a
        className="job-project job-project-link"
        href={item.href}
        target="_blank"
        rel="noreferrer"
      >
        {inner}
      </a>
    );
  }

  return <article className="job-project">{inner}</article>;
}

export default function Experience({ content }) {
  const jobs = (content.experience || []).filter((e) => e.visible);
  const companyWork = (content.work || []).filter(
    (w) => w.visible && w.safeToPublish && w.kind === "company"
  );

  return (
    <section id="experience" className="block">
      <div className="wrap">
        <div className="reveal">
          <p className="eyebrow">03 / Experience</p>
          <h2 className="display section-title">Shipping in AdTech.</h2>
        </div>
        <div className="timeline">
          {jobs.map((job, i) => {
            const projects = companyWork.filter((w) => w.experienceId === job.id);
            const grouped = LANES.map((lane) => ({
              ...lane,
              items: projects.filter((w) => w.lane === lane.id),
            })).filter((lane) => lane.items.length > 0);
            const ungrouped = projects.filter((w) => !w.lane);

            return (
              <article className="job reveal" key={job.id}>
                <span className={`job-dot${i === 0 ? "" : " outline"}`} />
                <div className="job-grid">
                  <div>
                    <p className="job-meta">{job.dates}</p>
                    <p className="job-loc">{job.location}</p>
                    {job.team && <p className="job-loc">{job.team}</p>}
                  </div>
                  <div>
                    <h3 className="display">
                      {job.company} <span>/ {job.role}</span>
                    </h3>
                    {job.achievements?.length ? (
                      <ul>
                        {job.achievements.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    ) : (
                      job.summary && <p className="job-summary">{job.summary}</p>
                    )}
                    {grouped.map((lane) => (
                      <div className="job-lane" key={lane.id}>
                        <div className="job-lane-head">
                          <p className="job-lane-label">{lane.label}</p>
                          <p className="job-lane-hint">{lane.hint}</p>
                        </div>
                        <div className="job-projects">
                          {lane.items.map((item) => (
                            <ProjectCard item={item} key={item.id} />
                          ))}
                        </div>
                      </div>
                    ))}
                    {ungrouped.length > 0 && (
                      <div className="job-projects">
                        {ungrouped.map((item) => (
                          <ProjectCard item={item} key={item.id} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

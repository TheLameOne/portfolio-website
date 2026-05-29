import type { ExperienceEntry } from "@/data/experience";

interface TimelineProps {
  entries: ExperienceEntry[];
}

export default function Timeline({ entries }: TimelineProps) {
  return (
    <div className="timeline">
      <div className="timeline-rail" />
      <div className="timeline-entries">
        {entries.map((entry, i) => (
          <div
            key={entry.id}
            className={`timeline-entry${i % 2 === 0 ? " timeline-entry-left" : " timeline-entry-right"}`}
          >
            {/* Connector dot */}
            <span className="timeline-dot" />

            <div className="brutalist-card timeline-card">
              {/* Header */}
              <div className="timeline-card-header">
                <div>
                  <h3 className="timeline-role">{entry.role}</h3>
                  <div className="timeline-meta">
                    <span className="timeline-company-pill">{entry.company}</span>
                    {entry.current && (
                      <span className="timeline-current-badge">Current</span>
                    )}
                  </div>
                </div>
                <div className="timeline-right-meta">
                  <span className="timeline-period">{entry.period}</span>
                  <span className="timeline-location">{entry.location}</span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="timeline-bullets">
                {entry.bullets.map((b, bi) => (
                  <li key={bi} className="timeline-bullet">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

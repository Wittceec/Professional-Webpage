function Experience() {
  const S = window.SITE;
  return (
    <section id="experience">
      <SectionHead num="03" title="EXPERIENCE" label="2023 → PRESENT" />
      <div>
        {S.experience.map((x, i) => (
          <Reveal key={i} className="xp-row interactive">
            <div className="xp-year">{x.year}</div>
            <div>
              <div className="xp-role">{x.role}</div>
              <div className="xp-co">@ {x.co}</div>
            </div>
            <ul className="xp-bullets">
              {x.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
            <div className="xp-arrow">→</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

window.Experience = Experience;

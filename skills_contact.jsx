function Skills() {
  const S = window.SITE;
  return (
    <section id="skills">
      <SectionHead num="06" title="SKILLS" label="STACK · TOOLING" />
      <div className="skills-grid">
        {S.skills.map((col) => (
          <Reveal key={col.title} className="skill-col">
            <h5>// {col.title}</h5>
            <div className="skill-list">
              {col.items.map((it) => (
                <div key={it.k} className="skill-pill">
                  <span>{it.k}</span>
                  <span className="lvl">{it.v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const S = window.SITE;
  return (
    <section id="contact" style={{ borderBottom: 0, minHeight: "auto", padding: 0 }}>
      <SectionHead num="07" title="CONTACT" label="LET'S TALK" />
      <div className="contact" style={{ padding: "0 6vw 80px" }}>
        <Reveal as="h2" className="contact-h">
          Want to <em>build</em> something?
        </Reveal>
        <Reveal as="div" className="contact-side" stagger>
          <div className="contact-row">
            <span className="k">EMAIL</span>
            <span className="v"><a href={"mailto:" + S.email}>{S.email}</a></span>
          </div>
          <div className="contact-row">
            <span className="k">PHONE</span>
            <span className="v">{S.phone}</span>
          </div>
          <div className="contact-row">
            <span className="k">LINKEDIN</span>
            <span className="v"><a href={S.linkedin} target="_blank" rel="noreferrer">/in/christopher-wittman</a></span>
          </div>
          <div className="contact-row">
            <span className="k">GITHUB</span>
            <span className="v"><a href={S.github} target="_blank" rel="noreferrer">@Wittceec</a></span>
          </div>
          <div className="contact-row">
            <span className="k">LOCATION</span>
            <span className="v">{S.location}</span>
          </div>
          <div style={{ marginTop: 24, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a className="btn-primary" href={"mailto:" + S.email}>
              <span>SEND A MESSAGE</span><span className="arrow">↗</span>
            </a>
            <a className="btn-primary" style={{ background: "transparent", color: "var(--fg)", border: "1px solid var(--line)" }} href="uploads/Christopher_Wittman_Resume.docx" download>
              <span>DOWNLOAD RESUME</span><span className="arrow">↓</span>
            </a>
          </div>
        </Reveal>
      </div>
      <footer>
        <span>© 2026 CHRISTOPHER WITTMAN</span>
        <span>BUILT WITH HTML, CSS &amp; CAFFEINE</span>
        <span>v.2026.01</span>
      </footer>
    </section>
  );
}

Object.assign(window, { Skills, Contact });

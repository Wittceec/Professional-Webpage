function Now() {
  const S = window.SITE;
  return (
    <section id="now">
      <SectionHead num="01" title="NOW" label="CURRENTLY · LIVE STATUS" />
      <div className="now-grid">
        <div>
          <Reveal as="h2" className="now-headline">
            {S.now.headline[0]} <em>{S.now.headline[1]}</em>
          </Reveal>
          <div className="now-list">
            {S.now.items.map((it, i) => (
              <Reveal key={it.idx} className="now-row interactive">
                <span className="idx mono">{it.idx}</span>
                <span className="lbl">
                  {it.label}
                  <small>{it.sub}</small>
                </span>
                <span className="stat">● {it.stat}</span>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal as="div" className="ccna-card">
          <div className="tag">{S.now.ccna.tag}</div>
          <h3>{S.now.ccna.title}</h3>
          <p className="blurb">{S.now.ccna.blurb}</p>
          <div className="ccna-bar"><i style={{ transform: `scaleX(${S.now.ccna.progress})` }}></i></div>
          <div className="mono" style={{ fontSize: 10, color: "var(--fg-3)", marginTop: 8, display: "flex", justifyContent: "space-between", letterSpacing: "0.16em" }}>
            <span>PROGRESS</span>
            <span style={{ color: "var(--accent)" }}>{Math.round(S.now.ccna.progress * 100)}%</span>
          </div>
          <div className="ccna-stats">
            {S.now.ccna.stats.map((s) => (
              <div key={s.k}>
                <div className="k">{s.k}</div>
                <div className="v"><em>{s.v}</em></div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  const S = window.SITE;
  return (
    <section id="about">
      <SectionHead num="02" title="ABOUT" label="WHO / WHY" />
      <div className="about">
        <Reveal as="aside" className="about-aside">
          <div className="label">// IDENTITY</div>
          <div className="monogram">
            <div className="ring"></div>
            <div className="glyph">{S.initials}</div>
          </div>
          <div className="monogram-meta">
            <div className="row"><span className="k">FILE</span><span className="v">CW-001</span></div>
            <div className="row"><span className="k">YEAR</span><span className="v">2026</span></div>
            <div className="row"><span className="k">MOTTO</span><span className="v">SHIP IT</span></div>
            <div className="row"><span className="k">COFFEE</span><span className="v">BLACK</span></div>
          </div>
        </Reveal>
        <Reveal as="div" className="about-body" stagger>
          {S.about.paragraphs.map((p, i) => {
            // emphasize one phrase per paragraph
            if (i === 0) {
              return (
                <p key={i}>
                  I'm an IT operations engineer at <em>Penn State Health</em>, where I keep physical and virtual server infrastructure online for hospitals across central Pennsylvania.
                </p>
              );
            }
            return (
              <p key={i}>
                Outside work I write code — iOS, web, game prototypes — because the fastest way to <em>learn a stack</em> is to ship something on it.
              </p>
            );
          })}
          <p>
            I lean operational: monitoring, automation, root cause. But I get bored without a build queue, so there's always a side project compiling somewhere.
          </p>
          <div className="meta">
            {S.about.meta.map((m) => (
              <div key={m.k}>
                <div className="k">{m.k}</div>
                <div className="v">{m.v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Now, About });

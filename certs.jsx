function Certs() {
  const S = window.SITE;
  return (
    <section id="certs">
      <SectionHead num="05" title="CERTIFICATIONS" label="EARNED · IN-PROGRESS" />
      <div className="cert-grid">
        {S.certs.map((c, i) => (
          <Reveal key={c.code} className={"cert" + (c.status === "in-progress" ? " in-progress" : "")}>
            <div className="badge">{String(i + 1).padStart(2, "0")}</div>
            <div>
              <h4>{c.name}</h4>
              <div className="meta">
                <span>{c.code}</span>
                <span style={{ margin: "0 8px" }}>·</span>
                <span className={c.status === "in-progress" ? "blink accent" : "accent"}>
                  {c.status === "in-progress" ? "IN PROGRESS" : c.year}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

window.Certs = Certs;

function Hero() {
  const S = window.SITE;
  const stage = useRef(null);
  // parallax / cursor reactive shift on the H1
  useEffect(() => {
    const onMove = (e) => {
      if (!stage.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 6;
      stage.current.style.setProperty("--mx", x + "px");
      stage.current.style.setProperty("--my", y + "px");
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // ticking time
  const [t, setT] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const tz = "America/New_York";
      const fmt = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit", minute: "2-digit", second: "2-digit",
        hour12: false, timeZone: tz,
      });
      setT(fmt.format(d) + " EST");
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-top">
        <span>{S.hero.eyebrow}</span>
        <span className="live">SYSTEMS NOMINAL · {t}</span>
      </div>

      <div className="hero-stage" ref={stage} style={{ transform: "translate(var(--mx,0), var(--my,0))" }}>
        <h1 className="hero-h1">
          <span className="row"><span className="word">{S.hero.line1[0]}</span> <span className="word it">{S.hero.line1[1]}</span></span>
          <span className="row"><span className="word">{S.hero.line2[0]}</span> <span className="word">{S.hero.line2[1]}</span> <span className="word">{S.hero.line2[2]}</span></span>
        </h1>

        <div className="hero-sub">
          <p className="hero-blurb reveal in">{S.hero.blurb}</p>
          <div className="hero-id-card">
            <div className="row"><span className="k">NAME</span><span className="v">{S.name}</span></div>
            <div className="row"><span className="k">ROLE</span><span className="v">IS Operations</span></div>
            <div className="row"><span className="k">ORG</span><span className="v">Penn State Health</span></div>
            <div className="row"><span className="k">LOC</span><span className="v">{S.location}</span></div>
            <div className="row"><span className="k">STATUS</span><span className="v accent">OPEN TO TALK</span></div>
          </div>
        </div>
      </div>

      <div className="hero-foot">
        <a href="#now" className="scroll">
          <span>SCROLL</span>
          <span className="scroll-bar"></span>
          <span>BEGIN</span>
        </a>
        <span className="mono" style={{ fontSize: 10, color: "var(--fg-3)", letterSpacing: "0.2em" }}>v.2026.01 · BUILT IN HUMMELSTOWN</span>
      </div>

      <div className="marquee">
        <div className="marquee-track">WITTMAN · INFRASTRUCTURE · WITTMAN · INFRASTRUCTURE · </div>
      </div>
    </section>
  );
}

window.Hero = Hero;

// ----- Project demos -----

function VectorGainsDemo() {
  const [t, setT] = useState(0);
  useEffect(() => {
    let raf;
    let start = performance.now();
    const tick = (now) => {
      setT((now - start) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  // generate vector chart
  const points = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      x: 10 + i * 18,
      base: 80 - Math.sin(i * 0.7) * 18 - i * 2.2,
    }));
  }, []);
  const sweep = (Math.sin(t * 0.6) + 1) / 2; // 0..1
  return (
    <div className="vg-stage">
      <div className="vg-phone">
        <div className="vg-screen">
          <div className="label">VECTOR · WEEK 14</div>
          <div className="big">+12.4<span style={{ color: "var(--fg-3)", fontSize: 14, fontWeight: 400 }}> kg</span></div>
          <svg className="vec-svg" viewBox="0 0 220 110" preserveAspectRatio="none">
            <defs>
              <linearGradient id="vgg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="oklch(0.88 0.22 130)" stopOpacity="0.5"/>
                <stop offset="1" stopColor="oklch(0.88 0.22 130)" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path
              d={
                "M " + points.map(p => `${p.x},${p.base}`).join(" L ") +
                ` L ${points[points.length - 1].x},105 L ${points[0].x},105 Z`
              }
              fill="url(#vgg)"
            />
            <path
              d={"M " + points.map(p => `${p.x},${p.base}`).join(" L ")}
              stroke="oklch(0.88 0.22 130)" strokeWidth="1.5" fill="none"
            />
            {points.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.base} r={i === Math.floor(sweep * (points.length - 1)) ? 3 : 1.5}
                fill={i === Math.floor(sweep * (points.length - 1)) ? "oklch(0.88 0.22 130)" : "var(--fg-2)"} />
            ))}
          </svg>
          <div className="stats">
            <div className="stat"><div className="k">SQUAT</div><div className="v">315</div></div>
            <div className="stat"><div className="k">BENCH</div><div className="v">225</div></div>
            <div className="stat"><div className="k">DEAD</div><div className="v">405</div></div>
            <div className="stat"><div className="k">OHP</div><div className="v">155</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NetSimDemo() {
  // animated packet flowing across nodes
  const [tick, setTick] = useState(0);
  useEffect(() => {
    let raf;
    let start = performance.now();
    const loop = (now) => {
      setTick((now - start) / 1000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const nodes = [
    { id: "PC1", x: 60, y: 90, type: "host" },
    { id: "SW1", x: 180, y: 90, type: "switch" },
    { id: "R1", x: 320, y: 60, type: "router" },
    { id: "R2", x: 460, y: 60, type: "router" },
    { id: "SW2", x: 600, y: 90, type: "switch" },
    { id: "PC2", x: 720, y: 90, type: "host" },
    { id: "SRV", x: 320, y: 200, type: "host" },
  ];
  const path = ["PC1", "SW1", "R1", "R2", "SW2", "PC2"];
  const links = [
    ["PC1","SW1"], ["SW1","R1"], ["R1","R2"], ["R2","SW2"], ["SW2","PC2"],
    ["SW1","SRV"], ["R1","SRV"],
  ];
  const byId = Object.fromEntries(nodes.map(n => [n.id, n]));

  // packet position along path
  const segDur = 0.7;
  const total = (path.length - 1) * segDur;
  const tt = tick % (total + 0.4);
  const segRaw = Math.floor(tt / segDur);
  const seg = Math.max(0, Math.min(path.length - 2, segRaw));
  const segT = Math.max(0, Math.min(1, (tt - seg * segDur) / segDur));
  const a = byId[path[seg]] || byId[path[0]];
  const b = byId[path[seg + 1]] || byId[path[path.length - 1]];
  const px = a.x + (b.x - a.x) * segT;
  const py = a.y + (b.y - a.y) * segT;

  return (
    <div className="netsim">
      <svg viewBox="0 0 780 280" preserveAspectRatio="xMidYMid meet">
        {links.map(([a, b], i) => {
          const A = byId[a], B = byId[b];
          return <line key={i} x1={A.x} y1={A.y} x2={B.x} y2={B.y} className="netsim-link"/>;
        })}
        {nodes.map((n) => {
          const w = n.type === "router" ? 32 : 28;
          return (
            <g key={n.id} transform={`translate(${n.x},${n.y})`}>
              <rect x={-w/2} y={-w/2} width={w} height={w} className={"netsim-node" + (n.type === "router" ? " router" : "")}/>
              <text className="netsim-label" x="0" y={w/2 + 14} textAnchor="middle">{n.id}</text>
              <text x="0" y="3" textAnchor="middle" fontSize="10" fill="var(--fg-3)" fontFamily="JetBrains Mono">
                {n.type === "router" ? "R" : n.type === "switch" ? "S" : "·"}
              </text>
            </g>
          );
        })}
        <circle className="netsim-packet" cx={px} cy={py} r="4">
          <animate attributeName="r" values="3;5;3" dur="0.6s" repeatCount="indefinite"/>
        </circle>
      </svg>
      <div style={{ position: "absolute", top: 12, right: 12, fontFamily: "var(--mono)", fontSize: 10, color: "var(--fg-3)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
        PING <span style={{ color: "var(--accent)" }}>192.168.1.10 → 10.0.0.50</span> · TTL 64
      </div>
    </div>
  );
}

function BudgetDemo() {
  const [t, setT] = useState(0);
  useEffect(() => {
    let raf;
    let start = performance.now();
    const loop = (now) => {
      setT((now - start) / 1000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  const items = [
    { lbl: "Rent", val: 1850, max: 1850, color: "warm" },
    { lbl: "Groceries", val: 412, max: 600, color: "green" },
    { lbl: "Gym + Misc", val: 89, max: 200, color: "green" },
    { lbl: "Eating Out", val: 178, max: 150, color: "danger" },
    { lbl: "Savings", val: 950, max: 1000, color: "green" },
  ];
  const ease = Math.min(1, t * 0.4);
  return (
    <div className="budget">
      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--fg-3)" }}>
        <span>APRIL · ENVELOPES</span>
        <span style={{ color: "var(--accent)" }}>$3,479 / $4,800</span>
      </div>
      {items.map((it) => (
        <div key={it.lbl} className={"budget-bar " + it.color}>
          <div className="row"><span className="lbl">{it.lbl}</span><span className="val">${it.val} / ${it.max}</span></div>
          <div className="track">
            <div className="fill" style={{ transform: `scaleX(${Math.min(1.2, (it.val / it.max) * ease)})` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}

function DnDDemo() {
  // 11x6 grid maze
  const W = 11, H = 6;
  const walls = useMemo(() => new Set([
    "1,1","2,1","3,1","5,1","7,1","9,1",
    "5,2","9,2",
    "1,3","2,3","5,3","7,3","8,3","9,3",
    "3,4","5,4",
  ]), []);
  const exit = "10,4";
  const enemies = ["6,2","8,4"];
  const gold = ["4,3","2,4","9,0"];

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visited, setVisited] = useState(new Set(["0,0"]));
  const [hp, setHp] = useState(20);
  const [g, setG] = useState(0);
  const [log, setLog] = useState([
    { t: "You enter the crypt. ", e: "" },
    { t: "Roll for initiative — ", e: "d20: 17" },
  ]);

  // auto path: simple right-down sweep with occasional dice "rolls"
  useEffect(() => {
    let dir = 1; // 1 right, -1 left
    let y = 0;
    let p = { x: 0, y: 0 };
    const steps = [];
    for (let row = 0; row < H; row++) {
      const cols = dir === 1 ? [...Array(W).keys()] : [...Array(W).keys()].reverse();
      for (const x of cols) {
        steps.push({ x, y: row });
      }
      dir *= -1;
    }
    let i = 0;
    const id = setInterval(() => {
      const next = steps[i % steps.length];
      i++;
      setPos(next);
      setVisited((v) => new Set([...v, `${next.x},${next.y}`]));
      const key = `${next.x},${next.y}`;
      if (enemies.includes(key)) {
        const dmg = 2 + Math.floor(Math.random() * 5);
        setHp((h) => Math.max(0, h - dmg));
        setLog((L) => [{ t: "Goblin strikes — ", e: `−${dmg} HP` }, ...L].slice(0, 3));
      } else if (gold.includes(key)) {
        const got = 5 + Math.floor(Math.random() * 10);
        setG((x) => x + got);
        setLog((L) => [{ t: "You loot a chest — ", e: `+${got}gp` }, ...L].slice(0, 3));
      } else if (key === exit) {
        setLog((L) => [{ t: "You find the stairs down. ", e: "DESCEND" }, ...L].slice(0, 3));
      }
    }, 600);
    return () => clearInterval(id);
  }, []);

  const cells = [];
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const k = `${x},${y}`;
      let cls = "dnd-cell";
      let ch = "";
      if (walls.has(k)) { cls += " wall"; ch = "▓"; }
      else if (k === `${pos.x},${pos.y}`) { cls += " player"; ch = "@"; }
      else if (enemies.includes(k)) { cls += " enemy"; ch = "g"; }
      else if (gold.includes(k)) { cls += " gold"; ch = "$"; }
      else if (k === exit) { cls += " exit"; ch = ">"; }
      else if (visited.has(k)) { cls += " visited"; ch = "·"; }
      else { ch = ""; }
      cells.push(<div key={k} className={cls}>{ch}</div>);
    }
  }

  return (
    <div className="dnd">
      <div className="dnd-hud">
        <span>HP <b>{hp}</b>/20</span>
        <span>GOLD <b>{g}</b></span>
        <span>LVL <b>3</b></span>
        <span>FLOOR <b>B2</b></span>
      </div>
      <div className="dnd-grid">{cells}</div>
      <div className="dnd-log">
        {log.map((l, i) => <div key={i}>&gt; {l.t}<b>{l.e}</b></div>)}
      </div>
    </div>
  );
}

function Projects() {
  const S = window.SITE;
  const demos = { vectorGains: VectorGainsDemo, netsim: NetSimDemo, budget: BudgetDemo, dnd: DnDDemo };
  return (
    <section id="projects">
      <SectionHead num="04" title="PROJECTS" label="THINGS I'M BUILDING" />
      <div className="proj-grid">
        {S.projects.map((p) => {
          const Demo = demos[p.demo];
          return (
            <Reveal key={p.num} className={"proj-card " + p.span}>
              <div className="proj-meta">
                <span className="num">[ {p.num} ]</span>
                <span>{p.kind}</span>
              </div>
              <div className="proj-stage"><Demo /></div>
              <div className="proj-foot">
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-tags">
                  {p.tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
                </div>
                <a className="proj-cta" href={p.href} target="_blank" rel="noreferrer">{p.cta} →</a>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

window.Projects = Projects;

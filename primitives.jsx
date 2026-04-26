// Reusable primitives + custom hooks
const { useEffect, useRef, useState, useMemo, useLayoutEffect } = React;

function useInView(ref, { threshold = 0.18, once = true } = {}) {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVis(true);
          if (once) io.disconnect();
        } else if (!once) {
          setVis(false);
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold, once]);
  return vis;
}

function Reveal({ children, as = "div", stagger = false, className = "", ...rest }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const Tag = as;
  const cls = (stagger ? "reveal-stagger" : "reveal") + (inView ? " in" : "") + (className ? " " + className : "");
  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  );
}

// Cursor + scroll progress
function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let rx = x, ry = y;
    const onMove = (e) => { x = e.clientX; y = e.clientY; };
    const onOver = (e) => {
      const t = e.target.closest("a, button, .interactive");
      document.documentElement.classList.toggle("cursor-hover", !!t);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    let raf;
    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <>
      <div ref={dot} className="cursor-dot"></div>
      <div ref={ring} className="cursor-ring"></div>
    </>
  );
}

function ScrollProgress() {
  const bar = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      if (bar.current) bar.current.style.transform = `scaleX(${pct})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-progress"><i ref={bar}></i></div>;
}

// Track which section is in view
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight * 0.4;
      let best = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= mid) best = id;
      }
      setActive(best);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids.join(",")]);
  return active;
}

function NavRail({ active }) {
  return (
    <nav className="rail">
      <a href="#hero" className="rail-logo">CW</a>
      <div className="rail-nav">
        {window.SITE.nav.map((n) => (
          <a
            key={n.id}
            href={"#" + n.id}
            className={"rail-item" + (active === n.id ? " active" : "")}
          >
            {n.num} · {n.label}
          </a>
        ))}
      </div>
      <div className="rail-foot">
        <a href={window.SITE.github} target="_blank" rel="noreferrer" title="GitHub">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>
        </a>
        <a href={window.SITE.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3v9zM6.5 8.3a1.7 1.7 0 1 1 0-3.5 1.7 1.7 0 0 1 0 3.5zM19 19h-3v-4.7c0-1.1 0-2.6-1.6-2.6S12.6 13 12.6 14.3V19h-3v-9h2.9v1.2h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.7V19z"/></svg>
        </a>
        <a href={"mailto:" + window.SITE.email} title="Email">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="0"/><path d="m3 7 9 7 9-7"/></svg>
        </a>
      </div>
    </nav>
  );
}

function SectionHead({ num, title, label }) {
  return (
    <Reveal className="sec-head">
      <span className="num">[ {num} ]</span>
      <span className="ttl">{title}</span>
      <span className="ln"></span>
      <span>{label}</span>
    </Reveal>
  );
}

Object.assign(window, { useInView, Reveal, Cursor, ScrollProgress, useActiveSection, NavRail, SectionHead });

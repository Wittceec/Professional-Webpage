function App() {
  const ids = window.SITE.nav.map((n) => n.id);
  const active = useActiveSection(ids);
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <NavRail active={active} />
      <main>
        <Hero />
        <Now />
        <About />
        <Experience />
        <Projects />
        <Certs />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

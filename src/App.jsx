import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import JourneyBackdrop from "./components/JourneyBackdrop";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("sameeh-portfolio-theme") || "night";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("sameeh-portfolio-theme", theme);
  }, [theme]);

  return (
    <>
      <JourneyBackdrop />

      <Hero
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) =>
            currentTheme === "night" ? "day" : "night",
          )
        }
      />

      <Projects />

      <Skills />

      <About />

      <Timeline />

      <Contact />

      <Footer />

      <ScrollTop />
    </>
  );
}

export default App;

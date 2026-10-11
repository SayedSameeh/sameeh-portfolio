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

  useEffect(() => {
    let frame = 0;

    const updateJourneyPosition = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const image = document.querySelector(".journey-backdrop-image");
        const hero = document.querySelector(".hero-section");
        if (!image || !hero) return;

        const maxScroll = Math.max(
          1,
          document.documentElement.scrollHeight - window.innerHeight,
        );
        const heroHeight = hero.offsetHeight;
        const imageTravel = Math.max(
          0,
          image.getBoundingClientRect().height - window.innerHeight,
        );
        const trailStart = image.getBoundingClientRect().height * 0.27;
        const heroProgress = Math.min(1, window.scrollY / heroHeight);
        const pageProgress = Math.max(
          0,
          Math.min(1, (window.scrollY - heroHeight) / Math.max(1, maxScroll - heroHeight)),
        );
        const imageOffset =
          heroProgress * trailStart +
          pageProgress * Math.max(0, imageTravel - trailStart);

        document.documentElement.style.setProperty(
          "--journey-offset",
          `${-imageOffset}px`,
        );
      });
    };

    updateJourneyPosition();
    window.addEventListener("scroll", updateJourneyPosition, { passive: true });
    window.addEventListener("resize", updateJourneyPosition);

    return () => {
      window.removeEventListener("scroll", updateJourneyPosition);
      window.removeEventListener("resize", updateJourneyPosition);
      window.cancelAnimationFrame(frame);
    };
  }, []);

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

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
        const footer = document.querySelector("footer");
        if (!image || !hero || !footer) return;

        const maxScroll = Math.max(
          1,
          document.documentElement.scrollHeight - window.innerHeight,
        );
        const heroHeight = hero.offsetHeight;
        const imageTravel = Math.max(
          0,
          image.getBoundingClientRect().height - window.innerHeight,
        );
        const imageHeight = image.getBoundingClientRect().height;
        const trailStart = imageHeight * 0.27;
        const gatePosition = imageHeight * 0.78;
        const gateTargetY = Math.max(
          0,
          window.innerHeight - footer.offsetHeight - 100,
        );
        const gateAtFooter = Math.max(
          trailStart,
          gatePosition - gateTargetY,
        );
        const heroProgress = Math.min(1, window.scrollY / heroHeight);
        const pageProgress = Math.max(
          0,
          Math.min(1, (window.scrollY - heroHeight) / Math.max(1, maxScroll - heroHeight)),
        );
        const imageOffset =
          heroProgress * trailStart +
          pageProgress * Math.max(0, Math.min(imageTravel, gateAtFooter) - trailStart);

        document.documentElement.style.setProperty(
          "--journey-offset",
          `${-imageOffset}px`,
        );
        const horizontalPosition =
          window.innerWidth <= 760 ? 25 + pageProgress * 55 : 50;
        document.documentElement.style.setProperty(
          "--journey-x",
          `${horizontalPosition}%`,
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

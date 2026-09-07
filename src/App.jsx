import { useEffect, useState } from "react";
import content from "./data/content.json";
import { useTheme } from "./hooks/useTheme.js";
import SiteHeader from "./components/SiteHeader.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import SkillsBand from "./components/SkillsBand.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Recognition from "./components/Recognition.jsx";
import Education from "./components/Education.jsx";
import SiteFooter from "./components/SiteFooter.jsx";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      const marker = window.scrollY + 120;
      let next = "about";
      for (const item of NAV) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= marker) next = item.id;
      }
      setActive(next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <SiteHeader
        content={content}
        nav={NAV}
        active={active}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main id="top">
        <Hero content={content} />
        <About content={content} />
        <SkillsBand content={content} />
        <Experience content={content} />
        <Projects content={content} />
        <Recognition content={content} />
        <Education content={content} />
        <SiteFooter content={content} />
      </main>
    </>
  );
}

import { useEffect, useRef, useState } from "react";
import content from "./data/content.json";
import { useTheme } from "./hooks/useTheme.js";
import Sidebar from "./components/Sidebar.jsx";
import TabNav from "./components/TabNav.jsx";
import ResumeTab from "./components/ResumeTab.jsx";
import WorkTab from "./components/WorkTab.jsx";
import HighlightsTab from "./components/HighlightsTab.jsx";
import ContactTab from "./components/ContactTab.jsx";

export default function App() {
  const [tab, setTab] = useState("resume");
  const { theme, toggleTheme } = useTheme();
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
  }, [tab]);

  return (
    <div className="app-shell">
      <div className="app-frame">
        <Sidebar
          content={content}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <main className="main-panel">
          <TabNav
            active={tab}
            onChange={setTab}
            theme={theme}
            onToggleTheme={toggleTheme}
          />
          <div className="panel-divider" />
          <div className="panel-body" ref={bodyRef}>
            {tab === "resume" && <ResumeTab content={content} theme={theme} />}
            {tab === "work" && <WorkTab content={content} theme={theme} />}
            {tab === "highlights" && (
              <HighlightsTab content={content} theme={theme} />
            )}
            {tab === "contact" && <ContactTab content={content} />}
          </div>
        </main>
      </div>

      <footer className="site-footer">
        © {new Date().getFullYear()} {content.identity.name}. All rights
        reserved.
      </footer>
    </div>
  );
}

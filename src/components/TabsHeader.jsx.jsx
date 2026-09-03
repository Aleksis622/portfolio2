export default function TabsHeader({ activeTab, setActiveTab }) {
  return (
    <div className="tabs-container">
      <div
        className={`tab ${activeTab === "about" ? "active" : ""}`}
        onClick={() => setActiveTab("about")}
      >
        About Me
      </div>

      <div
        className={`tab ${activeTab === "projects" ? "active" : ""}`}
        onClick={() => setActiveTab("projects")}
      >
        Projects
      </div>
    </div>
  );
}

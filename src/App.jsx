import { useState } from "react";
import HeaderTabs from "./components/HeaderTabs";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [modalProject, setModalProject] = useState(null);

  const projects = [
    {
      title: "MyTrain",
      short: "Train schedule & ticket system",
      description: "Full Laravel + React system with real-time map and ticket management.",
      image: "/train-preview.png"
    },
    {
      title: "FakeStore",
      short: "E-commerce demo",
      description: "React + Vite shop with product listing, cart, and API integration.",
      image: "/fakestore-preview.png"
    }
  ];

  return (
    <div className="portfolio">
      <AnimatedBackground />

      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "about" && (
        <section className="about-wrapper">
          <div className="about-card">
            <h2>About Me</h2>
            <p>
              I am a React developer who enjoys creating stylish, game-inspired UI
              with clean professional layouts. My work blends modern design with
              subtle aesthetics inspired by Zenless Zone Zero.
            </p>
          </div>

          <div className="nature-card">
            <img src="/digital-illustration-brian-edward-miller-3-1024x768.jpg" alt="Nature Art" />
          </div>
        </section>
      )}

      {activeTab === "projects" && (
        <section className="projects-section">
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                openModal={setModalProject}
              />
            ))}
          </div>
        </section>
      )}

      <ProjectModal
        project={modalProject}
        closeModal={() => setModalProject(null)}
      />
    </div>
  );
}

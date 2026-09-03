import { useState } from "react";
import HeaderTabs from "./components/TabsHeader.jsx";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [modalProject, setModalProject] = useState(null);

  const projects = [
    {
      title: "Grade viewer",
      short: "system where you can check student grades and change them",
      description: "Full Laravel + React system with real-time map and ticket management.",
      image: "/Screenshot_4.png"
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
              Hi my name is Aleksis Aleksandrs Eglitis i'm 19 years old and i'm a Web developer in a free time i play online chess and like to go for a walk.
              I have some experience working with frameworks like React and Laravel and have some skills working with  these programming languages - PHP, Javascript, CSS, Tailwind CSS, HTML and MySQL. 

            </p>
          </div>

          <div className="nature-card">
            <img src="/images.jpg" alt="Nature Art" />
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

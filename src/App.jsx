import { useEffect, useRef, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import AnimatedBackground from "./components/AnimatedBackground";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";

function useReveal() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

export default function App() {
  const [modalProject, setModalProject] = useState(null);

  const [aboutRef, aboutIn] = useReveal();
  const [skillsRef, skillsIn] = useReveal();
  const [projectsRef, projectsIn] = useReveal();

  const projects = [
    {
      title: "Grade Viewer",
      short: "System where you can check student grades and change them.",
      description:
        "An open-source project built with PHP that shows a simple way to create a CRUD application for managing student grades by subject.",
      image: "/Screenshot_4.png",
      github: "https://github.com/Aleksis622/grade_viewer"
    },
    {
      title: "Super Quiz",
      short: "A simple quiz project using laravel",
      description: "First project created in group using laravel and php in this project you can sign in and then log in to do some quizes on different topics like - sports, films, programming etc. questions and answers in this project are premade.",
      image: "/image1.png",
      github: "https://github.com/Lanheiv/Super_Quiz"
    },
    {
      title: "Minigames",
      short: "Two minigames created using Laravel and React",
      description: "My second group project we used laravel as a base and for typing game where you can check how fast you type and how accurate are you and in second game using react memory game is typical game where you have to memorise which object where was as fast as you can with different mode difficulties.",
      images: ["/image2.png", "/image3.png"],
      github: "https://github.com/Kpotapenkovs/minigames"
    }
  ];

  return (
    <div className="portfolio">
      <AnimatedBackground />

      <section className="hero">
        <p className="hero-eyebrow">Portfolio</p>
        <h1 className="hero-name">Aleksis Aleksandrs Eglītis</h1>
        <p className="hero-role">Web Developer</p>
        <p className="hero-tagline">
          I build clean and functional websites with React, Laravel and PHP —
          here's a look at who I am, what I work with, and what I've built.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="/A.Eglītis_CV.pdf" download className="btn-secondary">Download CV</a>
        </div>
      </section>

      <section id="about" ref={aboutRef} className={`section ${aboutIn ? "in-view" : ""}`}>
        <h2 className="section-title">About Me</h2>
        <div className="section-underline"></div>
        <div className="about-wrapper">
          <div className="about-card">
            <p>
              Hi, my name is Aleksis Aleksandrs Eglitis, I'm 19 years old and I'm a
              web developer. In my free time I play online chess and like to go for
              a walk. I have experience working with frameworks like React and
              Laravel, and skills working with PHP, JavaScript, CSS, Tailwind CSS,
              HTML and MySQL.
            </p>
            <div className="stats-row">
              <div className="stat-box">
                <div className="stat-number">2+</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">8</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">19</div>
                <div className="stat-label">Years Old</div>
              </div>
            </div>
          </div>

          <div className="about-side">
            <div className="profile-card">
              <div className="avatar-circle">AE</div>
              <div className="profile-name">Aleksis A. Eglitis</div>
              <div className="profile-role">Web Developer</div>

              <ul className="info-list">
                <li><span className="info-icon">📍</span> Latvia</li>
                <li><span className="info-icon">🎓</span> Self-taught / Student</li>
                <li><span className="info-icon">💻</span> React &amp; Laravel</li>
                <li><span className="info-icon">♟️</span> Chess &amp; walking</li>
              </ul>

              <div className="social-row">
                <a className="social-btn" href="https://github.com/Aleksis622" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a>
                <a className="social-btn" href="mailto:ipb23.a.eglitis@vtdt.edu.lv" aria-label="Email">✉</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" ref={skillsRef} className={`section ${skillsIn ? "in-view" : ""}`}>
        <h2 className="section-title">My Skills</h2>
        <div className="section-underline"></div>
        <SkillsSection />
      </section>

      <section id="projects" ref={projectsRef} className={`section ${projectsIn ? "in-view" : ""}`}>
        <h2 className="section-title">Projects</h2>
        <div className="section-underline"></div>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title + i}
              project={project}
              openModal={setModalProject}
            />
          ))}
        </div>
      </section>

      <Footer />

      <ProjectModal project={modalProject} closeModal={() => setModalProject(null)} />
    </div>
  );
}
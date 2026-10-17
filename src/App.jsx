import { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Doodles from "./components/Doodles";
import Icon from "./components/Icon";
import { HeroCode } from "./components/Illustrations";
import FeaturedProject from "./components/FeaturedProject";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import SkillsSection from "./components/SkillsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { projects, filters } from "./data/projects";
import { CV_URL, skillCount } from "./data/site";
import { useLang } from "./i18n/context";

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
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

function SectionTitle({ parts }) {
  const [start, accent] = parts;
  return (
    <h2 className="section-title">
      {start} <span className="accent">{accent}</span>
    </h2>
  );
}

export default function App() {
  const { lang, t } = useLang();
  const [modalProject, setModalProject] = useState(null);
  const [filter, setFilter] = useState("All");
  const closeModal = useCallback(() => setModalProject(null), []);

  const [aboutRef, aboutIn] = useReveal();
  const [featuredRef, featuredIn] = useReveal();
  const [worksRef, worksIn] = useReveal();
  const [contactRef, contactIn] = useReveal();

  const myTrain = projects.find((p) => p.id === "mytrain");
  const shown = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));
  const filterLabel = (f) => (f === "All" || f === "Testing" ? t(`filter_${f}`) : f);

  return (
    <div className="page">
      <Navbar />

      {/* HERO */}
      <section id="home" className="hero">
        <Doodles variant="hero" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{t("heroHello")}</p>
            <h1 className="hero-title">
              Laravel &amp; React
              <span className="accent">{t("heroRole")}</span>
            </h1>
            <p className="hero-tagline">{t("heroTagline")}</p>
            <div className="btn-row">
              <a href="#contact" className="btn btn-primary">{t("hireMe")}</a>
              <a href={CV_URL[lang]} download className="btn btn-ghost">
                {t("downloadCv")} <Icon name="download" size={16} />
              </a>
            </div>
          </div>
          <HeroCode />
        </div>
        <a href="#about" className="scroll-down" aria-label={t("scrollDown")}>
          <Icon name="arrowDown" size={20} />
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" ref={aboutRef} className={`section ${aboutIn ? "in-view" : ""}`}>
        <Doodles variant="about" />
        <div className="container">
          <div className="about-grid">
            <div className="about-copy">
              <SectionTitle parts={t("aboutTitle")} />
              <p>{t("aboutText")}</p>

              <div className="stats-row">
                <div className="stat-box">
                  <div className="stat-number">{projects.length}</div>
                  <div className="stat-label">{t("statProjects")}</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">{skillCount}</div>
                  <div className="stat-label">{t("statTech")}</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">{myTrain.testing.total}</div>
                  <div className="stat-label">{t("statTests")}</div>
                </div>
              </div>

              <SkillsSection />
            </div>

            <aside className="profile-card">
              <div className="avatar-circle">AE</div>
              <div className="profile-name">Aleksis A. Eglītis</div>
              <div className="profile-role">{t("profileRole")}</div>
              <ul className="info-list">
                <li><Icon name="pin" size={16} /> {t("infoCountry")}</li>
                <li><Icon name="cap" size={16} /> {t("infoStudy")}</li>
                <li><Icon name="code" size={16} /> React &amp; Laravel</li>
                <li><Icon name="chess" size={16} /> {t("infoHobby")}</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* FEATURED: MYTRAIN */}
      <section id="mytrain" ref={featuredRef} className={`section section-alt ${featuredIn ? "in-view" : ""}`}>
        <div className="container">
          <SectionTitle parts={t("featuredTitle")} />
          <FeaturedProject project={myTrain} openModal={setModalProject} />
        </div>
      </section>

      {/* WORKS */}
      <section id="works" ref={worksRef} className={`section ${worksIn ? "in-view" : ""}`}>
        <Doodles variant="works" />
        <div className="container">
          <SectionTitle parts={t("worksTitle")} />
          <div className="filter-row" role="group" aria-label={t("filterLabel")}>
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-pill ${filter === f ? "active" : ""}`}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {filterLabel(f)}
              </button>
            ))}
          </div>
          <div className="projects-grid">
            {shown.map((project) => (
              <ProjectCard key={project.id} project={project} openModal={setModalProject} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" ref={contactRef} className={`section ${contactIn ? "in-view" : ""}`}>
        <Doodles variant="contact" />
        <div className="container">
          <Contact />
        </div>
      </section>

      <Footer />

      <ProjectModal project={modalProject} closeModal={closeModal} />
    </div>
  );
}

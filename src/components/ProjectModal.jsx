import { useEffect } from "react";
import Icon from "./Icon";
import { useLang } from "../i18n/context";

export default function ProjectModal({ project, closeModal }) {
  const { t, L } = useLang();

  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && closeModal();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, closeModal]);

  if (!project) return null;

  return (
    <div className="modal-bg" onClick={closeModal}>
      <div
        className="modal-window"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={closeModal} aria-label={t("close")}>
          <Icon name="close" size={20} />
        </button>

        <div className={`modal-gallery ${project.images.length > 1 ? "duo" : ""}`}>
          {project.images.map((src, i) => (
            <img key={src} src={src} alt={t("screenshot", { title: project.title, n: i + 1 })} />
          ))}
        </div>

        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-text">{L(project.description)}</p>

        {project.stack && (
          <div className="chip-row">
            {project.stack.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        )}

        {project.features && (
          <>
            <h3 className="modal-sub">{t("whatItDoes")}</h3>
            <ul className="check-list">
              {project.features.map((f) => (
                <li key={f.en}>
                  <Icon name="check" size={15} /> {L(f)}
                </li>
              ))}
            </ul>
          </>
        )}

        {project.testing && (
          <>
            <h3 className="modal-sub">
              {t("testAutomation")}{" "}
              <span className="accent">{t("allPassing", { n: project.testing.total })}</span>
            </h3>
            {project.testing.suites.map((suite) => (
              <div key={suite.tool} className="modal-suite">
                <div className="modal-suite-head">
                  <strong>{suite.tool}</strong>
                  <span>
                    {suite.count} · {L(suite.label)} · {L(suite.extra)}
                  </span>
                </div>
                <p>{L(suite.intro)}</p>
                <ul className="check-list">
                  {suite.checks.map((c) => (
                    <li key={c.en}>
                      <Icon name="check" size={15} /> {L(c)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )}

        <a className="btn btn-primary modal-cta" href={project.github} target="_blank" rel="noopener noreferrer">
          <Icon name="github" size={16} /> {t("viewOnGithub")}
        </a>
      </div>
    </div>
  );
}

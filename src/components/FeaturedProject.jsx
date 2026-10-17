import Icon from "./Icon";
import { useLang } from "../i18n/context";

/* MyTrain spotlight. */
export default function FeaturedProject({ project, openModal }) {
  const { t, L } = useLang();

  return (
    <div className="featured-top">
      <button
        className="browser-frame"
        onClick={() => openModal(project)}
        aria-label={t("openDetails", { title: project.title })}
      >
        <div className="browser-bar">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="browser-url">localhost:5173</span>
        </div>
        <img src={project.images[0]} alt={t("screenshot", { title: project.title, n: 1 })} />
      </button>

      <div className="featured-info">
        <span className="badge">{t("latestProject")}</span>
        <h3 className="featured-title">{project.title}</h3>
        <p className="featured-text">{L(project.description)}</p>
        <div className="chip-row">
          {project.stack.map((s) => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>
        <div className="btn-row">
          <button className="btn btn-primary" onClick={() => openModal(project)}>
            {t("seeDetails")}
          </button>
          <a className="btn btn-ghost" href={project.github} target="_blank" rel="noopener noreferrer">
            <Icon name="github" size={16} /> {t("viewCode")}
          </a>
        </div>
      </div>
    </div>
  );
}

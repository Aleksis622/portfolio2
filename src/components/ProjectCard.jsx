import Icon from "./Icon";
import { useLang } from "../i18n/context";

export default function ProjectCard({ project, openModal }) {
  const { t, L } = useLang();
  const images = project.cardImages || project.images;

  return (
    <article className="project-card">
      <button
        className="project-thumb"
        onClick={() => openModal(project)}
        aria-label={t("openDetails", { title: project.title })}
      >
        {images.length > 1 && !project.featured ? (
          <div className="thumb-duo">
            {images.slice(0, 2).map((src, i) => (
              <img key={src} src={src} alt={t("screenshot", { title: project.title, n: i + 1 })} />
            ))}
          </div>
        ) : (
          <img src={images[0]} alt={t("screenshot", { title: project.title, n: 1 })} />
        )}
        {project.featured && <span className="thumb-badge">{t("newBadge")}</span>}
      </button>

      <div className="project-body">
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag === "Testing" ? t("filter_Testing") : tag}</span>
          ))}
        </div>
        <h3>{project.title}</h3>
        <p>{L(project.short)}</p>
        <div className="project-links">
          <button className="link-btn" onClick={() => openModal(project)}>
            {t("details")}
          </button>
          <a className="link-btn ghost" href={project.github} target="_blank" rel="noopener noreferrer">
            <Icon name="github" size={15} /> {t("code")}
          </a>
        </div>
      </div>
    </article>
  );
}

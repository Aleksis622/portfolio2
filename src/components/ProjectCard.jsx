export default function ProjectCard({ project, openModal }) {
  const images = project.images && project.images.length > 0
    ? project.images
    : [project.image];

  return (
    <div className="project-card">
      {images.length > 1 ? (
        <div className="project-img-duo" onClick={() => openModal(project)}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`${project.title} ${i + 1}`} />
          ))}
        </div>
      ) : (
        <img
          src={images[0]}
          alt={project.title}
          className="project-img"
          onClick={() => openModal(project)}
        />
      )}
      <h3>{project.title}</h3>
      <p>{project.short}</p>
      <div className="project-links">
        <a
          className="btn-git"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code
        </a>
      </div>
    </div>
  );
}
export default function ProjectModal({ project, closeModal }) {
  if (!project) return null;

  const images = project.images && project.images.length > 0
    ? project.images
    : [project.image];

  return (
    <div className="modal-bg" onClick={closeModal}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        {images.length > 1 ? (
          <div className="modal-img-duo">
            {images.map((src, i) => (
              <img key={i} src={src} alt={`${project.title} ${i + 1}`} />
            ))}
          </div>
        ) : (
          <img src={images[0]} alt={project.title} className="modal-img" />
        )}
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-text">{project.description}</p>
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
export default function ProjectModal({ project, closeModal }) {
  if (!project) return null;

  return (
    <div className="modal-bg" onClick={closeModal}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <img src={project.image} alt={project.title} className="modal-img" />
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-text">{project.description}</p>
      </div>
    </div>
  );
}

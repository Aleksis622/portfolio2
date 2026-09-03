export default function ProjectCard({ project, openModal }) {
  return (
    <div className="project-card" onClick={() => openModal(project)}>
      <img src={project.image} alt={project.title} className="project-img" />
      <h3>{project.title}</h3>
      <p>{project.short}</p>
    </div>
  );
}

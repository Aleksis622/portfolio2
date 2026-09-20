const skills = [
  "React",
  "Laravel",
  "PHP",
  "JavaScript",
  "CSS",
  "Tailwind CSS",
  "HTML",
  "MySQL"
];

export default function SkillsSection() {
  return (
    <div className="skills-grid">
      {skills.map((skill) => (
        <div className="skill-pill" key={skill}>
          {skill}
        </div>
      ))}
    </div>
  );
}
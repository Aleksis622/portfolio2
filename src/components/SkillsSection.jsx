import { skillGroups } from "../data/site";
import { useLang } from "../i18n/context";

export default function SkillsSection() {
  const { t } = useLang();

  return (
    <div className="skills-grid">
      {skillGroups.map((group) => (
        <div className="skill-group" key={group.title}>
          <h3>{t(group.title)}</h3>
          <div className="skill-pills">
            {group.skills.map((skill) => (
              <span className="skill-pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

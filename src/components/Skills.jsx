import "./Skills.css";
import { useState, useEffect, useRef } from "react";

function Skills() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const leftSkills = [
    { name: "HTML", value: 100 },
    { name: "CSS", value: 90 },
    { name: "JavaScript", value: 40 },
  ];

  const rightSkills = [
    { name: "PHP", value: 80 },
    { name: "WordPress", value: 90 },
    { name: "Photoshop", value: 55 },
  ];

  const SkillItem = ({ skill }) => (
    <div className="progress">
      <span className="skill">
        {skill.name}
        <i className="val">{skill.value}%</i>
      </span>

      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          style={{
            width: animate ? `${skill.value}%` : "0%",
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="skills section-bg"
      ref={sectionRef}
    >
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>

          <p>
            I specialize in building responsive, modern and
            user-friendly websites using HTML, CSS,
            JavaScript, React and WordPress.
          </p>

        </div>

        <div className="row skills-content">

          <div className="col-lg-6">
            {leftSkills.map((skill) => (
              <SkillItem
                key={skill.name}
                skill={skill}
              />
            ))}
          </div>

          <div className="col-lg-6">
            {rightSkills.map((skill) => (
              <SkillItem
                key={skill.name}
                skill={skill}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;
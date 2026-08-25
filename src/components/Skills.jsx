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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const leftSkills = [
    { name: "HTML5 / CSS3", value: 95 },
    { name: "JavaScript (ES6+)", value: 85 },
    { name: "React.js", value: 80 },
  ];

  const rightSkills = [
    { name: "WordPress / CMS", value: 90 },
    { name: "Elementor / Divi", value: 92 },
    { name: "Responsive & UI Design", value: 88 },
  ];

  const SkillItem = ({ skill }) => (
    <div className="skill-box mb-4">
      <div className="skill-info d-flex justify-content-between align-items-center mb-2">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-val">{skill.value}%</span>
      </div>

      <div className="progress-bar-wrap">
        <div
          className="progress-bar-fill"
          style={{
            width: animate ? `${skill.value}%` : "0%",
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills section-bg" ref={sectionRef}>
      <div className="container">

        {/* Section Title */}
        <div className="skills-header text-center text-md-start mb-4">
          <h2 className="section-title fw-bold">Technical Skills</h2>
          <p className="subtitle text-muted">
            Core technologies and frameworks I use to bring frontend designs and CMS platforms to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="row g-3 g-md-4">
          <div className="col-12 col-md-6">
            {leftSkills.map((skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </div>

          <div className="col-12 col-md-6">
            {rightSkills.map((skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
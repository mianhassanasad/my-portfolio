import "./Hero.css";
import heroBg from "../assets/Background.png";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay">

        <div className="hero-container">

          <h1>Mian Hassan</h1>

          <p>
            I'm{" "}
            <TypeAnimation
              sequence={[
                "Web Developer",
                2000,
                "Designer",
                2000,
                "Freelancer",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="typed-text"
            />
          </p>

        </div>

      </div>
    </section>
  );
}

export default Hero;
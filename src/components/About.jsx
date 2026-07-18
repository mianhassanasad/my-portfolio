import profileImg from "../assets/profile.jpg";
import "./About.css";
function About() {
  return (
    <section id="about" className="about">
      <div className="container">

        <div className="section-title cv">
          <h2>About</h2>


          <a id="download-btn" className="btn" href="/resume/Mian-Hassan.pdf" download="Your_CV.pdf">
            Download Resume <span>&rarr;</span>
          </a>
          {/* <p>I am Web Developer. I have several years of experience in Web Development.</p>  */}
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={profileImg} alt="Profile" className="img-fluid "/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Web Developer.</h3>
            <p id="text">
              I'm a very, very curious developer with creative skills and a passion for responsive, innovative,
              user-friendly, and modern design. I consider myself to be a results-oriented, dependable, and capable
              worker; who is not easily affected by job stress, and will be a strong asset to your department and
              organization in a variety of duties. I am certainly receptive to any company training and I am a fast
              learner in any on the job training situation, if required.
              <br />
              Skilled in HTML5, CSS3, JavaScript, WordPress, building websites, pages, and portals from a scratch
              throughout all phases of development using different approaches, libraries, and frameworks (jQuery,
              Bootstrap, npm).
              <br />
              ✔️ My goal is to improve my knowledge of learning new things and stronger basics. I am inspired by all
              possibilities of front-end technologies and interested to explore end learn further.
            </p>
           
            {/* <button id="btn" className="read-more btn-1" onClick={showMore}>
              Read More <span>&rarr;</span>
            </button>
            <br />
            <script>
              function showMore() {
                var textDiv = document.getElementById("text");
                var button = document.getElementById("read-more-btn");

             
                if (textDiv.classList.contains("show")) {
                  textDiv.classList.remove("show");
                  button.textContent = "Read More";
                } else {
                  textDiv.classList.add("show");
                  button.textContent = "Read Less";
                }
              }
            </script> */}
          
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 28 June 1997</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +324 424 4882</li>
                  <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Lahore, Pakistan</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 29</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Bachelor</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> mianhassanwp@gmail.com</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
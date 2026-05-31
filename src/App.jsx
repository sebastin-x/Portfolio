import React from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">Sebastin Xavier</h2>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <img
          src={`${process.env.PUBLIC_URL}/xavier.jpg`}
          alt="Profile"
          className="profile-image"
        />

        <h1>Sebastin Xavier B</h1>

        <h3>Junior Frontend Developer</h3>

        <p>
          BCA Graduate (2026) passionate about Frontend Development,
          React JS, UI/UX Design, and Full Stack Development.
        </p>

        <a href={`${process.env.PUBLIC_URL}/Sebastin_Xavier_Resume.pdf`} className="btn" target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
      </section>

      <div className="container">

        {/* About */}
        <section id="about">
          <h2>About Me</h2>

          <p>
            BCA graduate from Don Bosco College with strong knowledge
            in HTML, CSS, JavaScript, React JS, Node JS, MySQL,
            Python and Java.

            Certified in Oracle AI Foundations and experienced in
            developing responsive web applications and modern UI designs.
          </p>
        </section>

        {/* Skills */}
        <section id="skills">
          <h2>Technical Skills</h2>

          <div className="skill">
            <p className="skill-name">HTML & CSS</p>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <p className="skill-name">JavaScript</p>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <p className="skill-name">React JS</p>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <p className="skill-name">MySQL</p>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section>
          <h2>My Journey</h2>

          <div className="stats">

            <div className="stat-card">
              <h2>10+</h2>
              <p>Technologies</p>
            </div>

            <div className="stat-card">
              <h2>1+</h2>
              <p>Internship</p>
            </div>

            <div className="stat-card">
              <h2>1+</h2>
              <p>Major Project</p>
            </div>

            <div className="stat-card">
              <h2>2026</h2>
              <p>BCA Graduate</p>
            </div>

          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2>Projects</h2>

          <div className="project-card">
            <h3>TIMCRAF</h3>

            <p>
              Wood Cutting Planner & Management System
            </p>

            <ul>
              <li>Admin, Worker and Customer Dashboard</li>
              <li>Role Based Authentication</li>
              <li>Responsive Design</li>
              <li>MySQL Database Integration</li>
              <li>PHP Backend Development</li>
            </ul>
          </div>
        </section>

        {/* Internship */}
        <section>
          <h2>Internship Experience</h2>

          <div className="internship-card">
            <h3>Ruby Learning Center</h3>

            <p>Web Development Intern</p>

            <ul>
              <li>Built responsive webpages</li>
              <li>Created UI designs in Figma</li>
              <li>Worked with frontend technologies</li>
              <li>Collaborated with development teams</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section id="education">
          <h2>Education</h2>

          <div className="timeline">

            <div className="timeline-item">
              <h3>BCA</h3>

              <p>
                Don Bosco College, Yelagiri Hills
              </p>

              <p>2023 - 2026</p>
            </div>

            <div className="timeline-item">
              <h3>HSC</h3>

              <p>
                Dominic Savio Higher Secondary School
              </p>

              <p>2022 - 2023</p>
            </div>

          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2>Certifications</h2>

          <ul className="certification-list">
            <li>Oracle AI Foundations Certification</li>

            <li>
              National Level GLITCH FIX Competition Participant
            </li>
          </ul>
        </section>

        {/* Contact */}
<section id="contact" className="contact-section">

  <h2>Get In Touch</h2>

  <p className="contact-subtitle">
    I'm currently looking for Frontend Developer opportunities,
    internships, and freelance projects. Feel free to contact me.
  </p>

  <div className="contact-container">

    {/* Left Side */}
    <div className="contact-info-box">

      <div className="contact-item">
        <span>📧</span>
        <div>
          <h4>Email</h4>
          <p>xstephen48@gmail.com</p>
        </div>
      </div>

      <div className="contact-item">
        <span>📱</span>
        <div>
          <h4>Phone</h4>
          <p>+91 6381920965</p>
        </div>
      </div>

      <div className="contact-item">
        <span>📍</span>
        <div>
          <h4>Location</h4>
          <p>Tiruvannamalai, Tamil Nadu</p>
        </div>
      </div>

      <div className="social-links">
        <a
          href="https://github.com/sebastin-x"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/sebastin-xavier-7405062a4"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>

    </div>

    {/* Right Side */}
    <div className="contact-form">

      <input
        type="text"
        placeholder="Your Name"
      />

      <input
        type="email"
        placeholder="Your Email"
      />

      <textarea
        rows="6"
        placeholder="Your Message"
      ></textarea>

      <button>
        Send Message
      </button>

    </div>

  </div>

</section>

      </div>

      {/* Footer */}
      <footer>
        <h3>Let's Build Something Amazing</h3>

        <p>
          © 2026 Sebastin Xavier B
        </p>
      </footer>
    </>
  );
}

export default App;
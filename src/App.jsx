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
          src={`${process.env.PUBLIC_URL}/xavier.png`}
          alt="Profile"
          className="profile-image"
        />

        <h1>Sebastin Xavier B</h1>

        <h3>Junior Java Full Stack Developer</h3>

        <p>
          BCA Graduate passionate about Java Full Stack Development,
          building scalable applications, and solving complex problems with clean code.
        </p>

        <a href={`${process.env.PUBLIC_URL}/Sebastin_Xavier.pdf`} className="btn" target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
      </section>

      <div className="container">

        {/* About */}
        <section id="about">
          <h2>About Me</h2>

          <p>
            BCA graduate with hands-on experience in Java-based application development and full-stack web development. Skilled in Java, Spring Boot, REST APIs, Spring Data JPA, MySQL, React.js, JavaScript, HTML5 and CSS3. Experienced in developing database-driven applications, RESTful services, CRUD operations and responsive user interfaces. Familiar with Git/GitHub, Postman and software development workflows.
          </p>
        </section>

        {/* Skills */}
        <section id="skills">
          <h2>Technical Skills</h2>

          <div className="skill">
            <p className="skill-name">Backend: Java, Spring Boot, Spring Core, Spring MVC</p>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <p className="skill-name">Frontend: React JS, HTML5, CSS3, JavaScript</p>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <p className="skill-name">Databases & APIs: MySQL, REST API, JPA/Hibernate, Microservices</p>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <p className="skill-name">Tools: Git, GitHub, Postman, Figma, Eclipse, VS Code, XAMPP</p>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section>
          <h2>My Journey</h2>

          <div className="stats">

            <div className="stat-card">
              <h2>15+</h2>
              <p>Technologies</p>
            </div>

            <div className="stat-card">
              <h2>1</h2>
              <p>Internship</p>
            </div>

            <div className="stat-card">
              <h2>2</h2>
              <p>Major Projects</p>
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
            <h3>Employee Management System</h3>

            <p>
              Java Full-Stack Web Application
            </p>

            <ul>
              <li>Full-stack application using Spring Boot REST API backend and React frontend</li>
              <li>Dynamic metrics panel tracking employees, statuses, and departments in real-time</li>
              <li>Secure CRUD operations for workforce records management</li>
              <li>MySQL database integration with JPA/Hibernate</li>
            </ul>
          </div>

          <div className="project-card">
            <h3>TIMCRAF</h3>

            <p>
              Wood Cutting Planner & Management System
            </p>

            <ul>
              <li>Role-based web application with Admin, Worker, and Customer modules</li>
              <li>Secure authentication and Role-Based Access Control (RBAC)</li>
              <li>Responsive UI with optimized MySQL database queries</li>
              <li>End-to-end production workflow management</li>
            </ul>
          </div>
        </section>

        {/* Internship */}
        <section>
          <h2>Internship Experience</h2>

          <div className="internship-card">
            <h3>Ruby Learning Centre</h3>

            <p>Web Development Intern | May 2025</p>
            <p>Tiruvannamalai, Tamil Nadu</p>

            <ul>
              <li>Designed and developed responsive web pages using HTML, CSS, and JavaScript</li>
              <li>Created wireframes and UI layouts in Figma for multiple projects</li>
              <li>Improved UI consistency across 3+ pages with responsive design</li>
              <li>Collaborated with cross-functional team on frontend development and application design</li>
              <li>Met weekly sprint deadlines and gained exposure to professional coding standards</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section id="education">
          <h2>Education</h2>

          <div className="timeline">

            <div className="timeline-item">
              <h3>Bachelor of Computer Applications (BCA)</h3>

              <p>
                Don Bosco College, Yelagiri Hills, Tirupattur | Thiruvalluvar University
              </p>

              <p>Jun 2023 - May 2026 (Graduated 2026)</p>
            </div>

            <div className="timeline-item">
              <h3>Higher Secondary Certificate (HSC)</h3>

              <p>
                Dominic Savio Higher Secondary School, Tirupattur, Tamil Nadu
              </p>

              <p>Jun 2022 - Apr 2023</p>
            </div>

          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2>Certifications & Achievements</h2>

          <ul className="certification-list">
            <li>Java Full-Stack Training (6 Months) | SLA Consultants | Completed Aug 2026</li>

            <li>
              8th Place – National-Level GLITCH FIX Competition, Sacred Heart College, Tirupattur
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
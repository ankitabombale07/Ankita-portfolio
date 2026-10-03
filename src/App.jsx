import React from "react";
import "./App.css";


function App() {
  const skills = [
    "React.js",
    "JavaScript",
    "Next.js",
    "PHP",
    "Node.js",
    "MySQL",
    "MongoDB",
    "HTML5",
    "CSS3",
    "REST APIs",
    "Git",
    "GitHub",
    "WordPress",
    "Elementor",
    "Postman",
    "Python",
  ];

  const projects = [
    {
      number: "01",
      title: "Reborn Skin & Hair Clinic",
      subtitle: "Multi-Branch Healthcare Website",
      description:
        "Develop and maintain a production website for a multi-branch skin and hair clinic, handling page development, responsive layouts, navigation, mega menus, forms, popups, CTAs, plugins, custom functionality and ongoing website maintenance.",
      tech: [
        "WordPress",
        "Elementor",
        "HTML5",
        "CSS3",
        "JavaScript",
        "PHP",
        "Plugins",
        "Technical SEO",
      ],
      type: "WordPress Development",
      link: "https://rebornclinics.in/",
    },
    {
      number: "02",
      title: "Ground Booking ",
      description:
        "A React-based sports ground booking application with responsive interfaces, dynamic booking functionality and database integration.",
      tech: ["React.js", "JavaScript", "HTML5", "CSS3", "MySQL"],
      type: "Booking Application",
      link: "https://belbasket.in/booking/",
    },
    {
      number: "03",
      title: "SchoolAid",
      description:
        "A PHP-based school management application for student information, examinations, academic records and report-card generation.",
      tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
      type: "Management System",
      link: "https://app.peterspanchgani.org/schoolaid/school/index.php",
    },
    {
      number: "04",
      title: "Yoga.in",
      description:
        "A responsive WordPress website featuring location-based search, filtering, dynamic content and database-driven functionality.",
      tech: ["WordPress", "JavaScript", "MySQL", "HTML5", "CSS3", "PHP"],
      type: "WordPress Website",
      link: "https://yoga.in/",
    },
    {
      number: "05",
      title: "Mefree.com",
      description:
        "A content-driven WordPress website with custom widgets, theme and plugin customization, responsive UI and SEO improvements.",
      tech: ["WordPress", "JavaScript", "HTML5", "CSS3", "PHP"],
      type: "WordPress Website",
      link: "https://mefree.com/",
    },
    {
      number: "06",
      title: "Gaurav Astro Reiki",
      description:
        "A responsive static website developed using Bootstrap with mobile-first layouts and cross-browser compatibility.",
      tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "PHP"],
      type: "Frontend Website",
      link: "https://www.gauravastroreiki.com/",
    },
  ];

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <a href="#home" className="logo">
          ankita<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </nav>

        <a href="#contact" className="nav-contact">
          Let's Talk <span>↗</span>
        </a>
      </header>


      {/* ================= HERO ================= */}

      <main id="home" className="hero">

        <div className="hero-content">

          <div className="hero-intro">
            <span className="small-label">
              SOFTWARE DEVELOPER
            </span>

            <h1>
              Hi, I'm
              <br />
              <span>Ankita  Warghude.</span>

            </h1>

            <p className="hero-description">
              I build responsive, reliable and database-driven
              web applications using modern frontend and backend
              technologies.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View My Work <span>↗</span>
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>

            <div className="hero-tech">
              {/* <span>React.js</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>MySQL</span> */}
            </div>
          </div>


          {/* PHOTO */}

          <div className="hero-photo-area">

            <div className="photo-background"></div>

            <div className="photo-circle">
              <img
                src="/images/ankita.jpeg"
                alt="Ankita Warghude"
              />
            </div>
{/* 
            <div className="floating-card card-one">
              <span>01</span>
              <strong>Developer</strong>
            </div>

            <div className="floating-card card-two">
              <span>●</span>
              <strong>Available</strong>
            </div> */}

          </div>

        </div>


        <div className="hero-bottom">

          <span>SCROLL TO EXPLORE</span>

          <div className="scroll-line"></div>

          <span>01 / 06</span>

        </div>

      </main>


      {/* ================= ABOUT ================= */}

      <section id="about" className="section about-section">

        <div className="section-heading">
          <span className="section-number">01</span>

          <div>
            <p className="eyebrow">ABOUT ME</p>

            <h2 className="about-heading">
              Turning &nbsp;ideas&nbsp; into
              <br />
              <span>digital &nbsp;experiences.</span>
            </h2>
          </div>
        </div>


        <div className="about-grid">

          <div className="about-large-text">
            <p>
              I'm a Software Developer based in Pune with
              professional experience building and maintaining
              production web applications, business platforms
              and database-driven systems.
            </p>
          </div>

          <div className="about-details">

            <p>
              My experience spans React.js, JavaScript, PHP,
              MySQL, Node.js, WordPress and API integrations.
              I've worked on multi-branch CRM systems,
              booking applications, school management systems
              and production websites.
            </p>

            <p>
              I enjoy turning requirements into clean,
              responsive and practical digital experiences
              while continuously learning new technologies.
            </p>

            <div className="about-stats">

              <div>
                <strong>1.5+</strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong>6+</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>15+</strong>
                <span>Technologies</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      {/* ================= SKILLS ================= */}

<section id="skills" className="section skills-section">

  <div className="section-heading">
    <span className="section-number">02</span>

    <div>
      <p className="eyebrow">TECH STACK</p>

      <h2>
        Tools I use to
        <br />
        <span>build things.</span>
      </h2>
    </div>
  </div>


  <div className="skills-layout">

    {/* INTRO */}

    <div className="skills-intro">

      <p>
        My technical experience covers frontend development,
        backend development, databases, APIs, CMS platforms
        and deployment.
      </p>

      <span className="skills-intro-label">
        MY TOOLKIT
      </span>

    </div>


    {/* SKILL GROUPS */}

    <div className="skills-groups">


      {/* FRONTEND */}

      <div className="skill-group">

        <div className="skill-group-header">
          <span>01</span>

          <h3>
            Frontend Development
          </h3>
        </div>


        <div className="skill-chips">

          <span>React.js</span>
          <span>JavaScript</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Bootstrap</span>
          <span>Responsive UI</span>
          <span>DOM</span>

        </div>

      </div>


      {/* BACKEND */}

      <div className="skill-group">

        <div className="skill-group-header">
          <span>02</span>

          <h3>
            Backend & Database
          </h3>
        </div>


        <div className="skill-chips">

          <span>Node.js</span>
          <span>PHP</span>
          <span>MySQL</span>
          <span>MongoDB</span>
          <span>REST APIs</span>
          <span>CRUD</span>
          <span>API Integration</span>

        </div>

      </div>


      {/* WORDPRESS */}

      <div className="skill-group">

        <div className="skill-group-header">
          <span>03</span>

          <h3>
            WordPress & CMS
          </h3>
        </div>


        <div className="skill-chips">

          <span>WordPress</span>
          <span>Elementor</span>
          <span>Theme Customization</span>
          <span>Plugin Integration</span>
          <span>Custom Widgets</span>

        </div>

      </div>


      {/* TOOLS */}

      <div className="skill-group">

        <div className="skill-group-header">
          <span>04</span>

          <h3>
            Tools & Deployment
          </h3>
        </div>


        <div className="skill-chips">

          <span>Git</span>
          <span>GitHub</span>
          <span>Postman</span>
          <span>VS Code</span>
          <span>WP Engine</span>
          <span>Hostinger</span>
          <span>Bluehost</span>

        </div>

      </div>


      {/* OTHER */}

      <div className="skill-group">

        <div className="skill-group-header">
          <span>05</span>

          <h3>
            Development Practices
          </h3>
        </div>


        <div className="skill-chips">

          <span>Debugging</span>
          <span>Performance Optimization</span>
          <span>Technical SEO</span>
          <span>Cross-Browser Testing</span>
          <span>Responsive Development</span>

        </div>

      </div>

    </div>

  </div>

</section>


      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="section experience-section">

        <div className="section-heading">
          <span className="section-number">03</span>

          <div>
            <p className="eyebrow">EXPERIENCE</p>
            <h2>
              Where I've
              <br />
              <span>worked.</span>
            </h2>
          </div>
        </div>


        <div className="experience-list">

          {/* ================= REBORN ================= */}

          <article className="experience-item">

            <div className="experience-date">
              2026 — PRESENT
            </div>

            <div className="experience-content">

              <p className="experience-role">
                SOFTWARE DEVELOPER
              </p>

              <h3>
                Reborn Skin & Hair Clinic
              </h3>

              <p className="experience-description">
                Develop and maintain a production website for a
                multi-branch skin and hair clinic using WordPress
                and Elementor, with a focus on responsive UI,
                custom functionality and website performance.
              </p>

              <ul className="experience-points">

                <li>
                  Develop and maintain treatment pages, landing
                  pages, sections and responsive website layouts.
                </li>

                <li>
                  Customize WordPress websites using HTML, CSS,
                  JavaScript, PHP and Elementor.
                </li>

                <li>
                  Build and manage navigation systems, mega menus,
                  forms, popups, CTAs and interactive components.
                </li>

                <li>
                  Manage multi-branch clinic structures including
                  location pages, menus and branch-specific content.
                </li>

                <li>
                  Integrate and configure WordPress plugins while
                  troubleshooting frontend scripts, forms and
                  production issues.
                </li>

                <li>
                  Work on website performance, responsive design,
                  image optimization and technical SEO improvements.
                </li>

                <li>
                  Maintain the production website on WP Engine and
                  handle ongoing content, layout and functionality updates.
                </li>

              </ul>

              <div className="experience-tags">
                <span>WordPress</span>
                <span>Elementor</span>
                <span>JavaScript</span>
                <span>PHP</span>
                <span>CSS</span>
                <span>SEO</span>
              </div>

            </div>

          </article>


          {/* ================= TECHBUDS ================= */}

          <article className="experience-item">

            <div className="experience-date">
              2024 — 2026
            </div>

            <div className="experience-content">

              <p className="experience-role">
                SOFTWARE DEVELOPER
              </p>

              <h3>
                Techbuds IT Solutions Pvt. Ltd.
              </h3>

              <p className="experience-description">
                Developed and maintained production web
                applications using React.js, Next.js, Node.js,
                PHP, JavaScript and MySQL.
              </p>

              <ul className="experience-points">

                <li>
                  Built a custom multi-branch CRM for managing
                  leads, appointments, follow-ups and customer data.
                </li>

                <li>
                  Integrated Meta Ads, Google Sheets and
                  WhatsApp Business APIs.
                </li>

                <li>
                  Designed REST APIs and connected frontend
                  applications with MySQL databases.
                </li>

                <li>
                  Automated business workflows using Python,
                  Google Apps Script, Zapier and Pabbly.
                </li>

                <li>
                  Worked with Git, GitHub, Postman and
                  production deployment environments.
                </li>

                <li>
                  Developed responsive and dynamic interfaces
                  focused on usability and performance.
                </li>

              </ul>

              <div className="experience-tags">
                <span>React.js</span>
                <span>Next.js</span>
                <span>Node.js</span>
                <span>PHP</span>
                <span>MySQL</span>
                <span>REST APIs</span>
              </div>

            </div>

          </article>


          {/* ================= ACMEGRADE ================= */}

          <article className="experience-item">

            <div className="experience-date">
              2024
            </div>

            <div className="experience-content">

              <p className="experience-role">
                WEB DEVELOPMENT INTERN
              </p>

              <h3>
                Acmegrade Pvt. Ltd.
              </h3>

              <p className="experience-description">
                Developed responsive web pages using HTML5,
                CSS3, JavaScript and Bootstrap while gaining
                practical experience in PHP and frontend development.
              </p>

              <ul className="experience-points">

                <li>
                  Developed responsive web pages using HTML5,
                  CSS3, JavaScript and Bootstrap.
                </li>

                <li>
                  Worked with PHP for basic web development
                  and backend functionality.
                </li>

                <li>
                  Practiced reusable UI development,
                  debugging and responsive design.
                </li>

              </ul>

              <div className="experience-tags">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
                <span>PHP</span>
              </div>

            </div>

          </article>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section projects-section">

        <div className="section-heading">

          <span className="section-number">04</span>

          <div>
            <p className="eyebrow">SELECTED WORK</p>

            <h2>
              Things I've
              <br />
              <span>built.</span>
            </h2>
          </div>

        </div>


        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-type">
                  {project.type}
                </span>

              </div>

              <h3>{project.title}</h3>

              {project.subtitle && (
                <div className="project-subtitle">
                  {project.subtitle}
                </div>
              )}

              <p>{project.description}</p>

              <div className="project-tech">

                {project.tech.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}

              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project <span>↗</span>
                </a>
              )}

            </article>

          ))}

        </div>

      </section>


      {/* ================= EDUCATION ================= */}

      {/* ================= EDUCATION ================= */}

<section id="education" className="section education-section">

  <div className="section-heading">

    <span className="section-number">05</span>

    <div>
      <p className="eyebrow">EDUCATION</p>

      <h2 className="education-heading">
        Academic
        <br />
        <span>background.</span>
      </h2>
    </div>

  </div>


  <div className="education-list">

    <article className="education-item">

      <div className="education-year">
        2022 — 2024
      </div>

      <div className="education-content">

        <p>MSc — Computer Science</p>

        <h3>
          Padmashri Vikhe Patil College of Arts,
          Science & Commerce
        </h3>

        <span>
          Pravaranagar, Loni · 74.55%
        </span>

      </div>

    </article>


    <article className="education-item">

      <div className="education-year">
        2019 — 2022
      </div>

      <div className="education-content">

        <p>BSc — Computer Science</p>

        <h3>
          Rajarshi Shahu Mahavidyalaya
        </h3>

        <span>
          Deolali Pravara · 81.64%
        </span>

      </div>

    </article>

  </div>

</section>


      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact-section">

        <div className="contact-number">
          06
        </div>

        <p className="eyebrow">
          HAVE A PROJECT IN MIND?
        </p>

        <h2>
          Let's build
          <br />
          <span>something great.</span>
        </h2>

        <p className="contact-description">
          I'm always interested in discussing new projects,
          creative ideas and opportunities to build useful
          digital experiences.
        </p>

        <a
          href="mailto:ankitabombale3537@gmail.com"
          className="contact-email"
        >
          ankitabombale3537<span>@</span>gmail.com
        </a>

        <div className="contact-buttons">

          <a
            href="mailto:ankitabombale3537@gmail.com"
            className="primary-btn"
          >
            Email Me <span>↗</span>
          </a>

          <a
            href="tel:+918080149704"
            className="secondary-btn"
          >
            +91 8080149704
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-logo">
          ankita<span>.</span>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <p>
          © {new Date().getFullYear()} Ankita Warghude
        </p>

      </footer>

    </div>
  );
}

export default App;
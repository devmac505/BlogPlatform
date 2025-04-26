import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faGraduationCap,
  faLaptopCode,
  faPenNib,
  faCamera,
  faBookOpen
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <div className="container">
          <h1>About Me</h1>
          <p className="about-subtitle">Developer, Writer, and Lifelong Learner</p>
        </div>
      </div>

      <div className="container">
        <div className="about-content">
          <div className="about-section">
            <h2>My Story</h2>
            <p>
              Hello! I'm Mac, a passionate full stack developer with a love for creating
              intuitive and dynamic user experiences. My journey in web development began
              three years ago when I built my first React application.
            </p>
            <p>
              Since then, I've been constantly learning and expanding my skills in modern
              web technologies. I enjoy solving complex problems and turning ideas into
              reality through code.
            </p>
            <p>
              This blog is my platform to share what I've learned, document my journey,
              and connect with others in the tech community. I believe in the power of
              knowledge sharing and continuous learning.
            </p>
          </div>

          <div className="about-section">
            <h2>Skills & Expertise</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3><FontAwesomeIcon icon={faLaptopCode} /> Frontend</h3>
                <ul>
                  <li>React & Redux</li>
                  <li>JavaScript (ES6+)</li>
                  <li>HTML5 & CSS3</li>
                  <li>Responsive Design</li>
                  <li>SASS/SCSS</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3><FontAwesomeIcon icon={faCode} /> Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>RESTful APIs</li>
                  <li>Authentication</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3><FontAwesomeIcon icon={faPenNib} /> Other</h3>
                <ul>
                  <li>Git & GitHub</li>
                  <li>Deployment (Heroku, Netlify)</li>
                  <li>Technical Writing</li>
                  <li>UI/UX Principles</li>
                  <li>Testing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Education</h2>
            <div className="education-item">
              <h3><FontAwesomeIcon icon={faGraduationCap} /> B.S. in Computer Science</h3>
              <p>University of Technology, 2020</p>
              <p>Focused on web development and software engineering principles.</p>
            </div>
            <div className="education-item">
              <h3><FontAwesomeIcon icon={faBookOpen} /> Continuous Learning</h3>
              <p>I'm constantly expanding my knowledge through online courses, documentation, and hands-on projects.</p>
            </div>
          </div>

          <div className="about-section">
            <h2>Interests & Hobbies</h2>
            <div className="interests-grid">
              <div className="interest-item">
                <FontAwesomeIcon icon={faLaptopCode} className="interest-icon" />
                <h3>Web Development</h3>
                <p>Building interactive web applications and exploring new technologies.</p>
              </div>
              <div className="interest-item">
                <FontAwesomeIcon icon={faPenNib} className="interest-icon" />
                <h3>Technical Writing</h3>
                <p>Sharing knowledge and explaining complex concepts in simple terms.</p>
              </div>
              <div className="interest-item">
                <FontAwesomeIcon icon={faCamera} className="interest-icon" />
                <h3>Photography</h3>
                <p>Capturing moments and exploring visual storytelling.</p>
              </div>
              <div className="interest-item">
                <FontAwesomeIcon icon={faBookOpen} className="interest-icon" />
                <h3>Reading</h3>
                <p>Fiction, technology books, and articles about web development.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Connect With Me</h2>
            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

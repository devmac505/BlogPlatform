import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faPenNib,
  faCamera,
  faBookOpen,
  faCheck,
  faArrowRight,
  faGraduationCap,
  faCode,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">
            <FontAwesomeIcon icon={faUser} className="subtitle-icon" /> About Me
          </span>
          <h2 className="section-title">A Personal Journey Through Code & Creativity</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-name">Hi, I'm Mac</h3>
            <h4 className="about-role">Full Stack Developer & Tech Enthusiast</h4>

            <p className="about-intro">
              Welcome to my personal blog! I'm passionate about creating innovative web solutions and sharing knowledge
              from my journey in the world of technology.
            </p>

            <p className="about-description">
              As a full stack developer, I specialize in building responsive, user-friendly
              applications using modern web technologies. This platform is where I document my learning process, showcase projects,
              and connect with like-minded individuals in the tech community.
            </p>

            <p className="about-description">
              When I'm not coding, you can find me exploring new hiking trails, experimenting with photography,
              or diving into a good book. I believe in continuous learning and sharing knowledge with others.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Blog Articles</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1+</span>
                <span className="stat-label">Years Coding</span>
              </div>
            </div>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <div className="feature-text">
                  <h4>Technical Expertise</h4>
                  <p>JavaScript, React, Node.js, MongoDB, Express, CSS/SASS</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <div className="feature-text">
                  <h4>Education</h4>
                  <p>B.S. in Information Technology, Central Bicol State University of Agriculture</p>
                </div>
              </div>
            </div>

            <div className="about-social">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>

            <Link to="/about" className="about-cta">
              View My Full Profile <FontAwesomeIcon icon={faArrowRight} className="cta-icon" />
            </Link>
          </div>

          <div className="about-image">
            <div className="author-image">
              <div className="image-frame">
                <div className="image-content">
                  <div className="image-placeholder">
                    <span>Mac</span>
                  </div>
                </div>
              </div>
              <div className="image-decoration"></div>
            </div>

            <div className="about-interests">
              <h3 className="interests-title">My Interests</h3>

              <div className="interests-grid">
                <div className="interests-row">
                  <div className="interest-item">
                    <div className="interest-icon">
                      <FontAwesomeIcon icon={faLaptopCode} />
                    </div>
                    <h3>Web Dev</h3>
                    <p>Modern frameworks</p>
                  </div>

                  <div className="interest-item">
                    <div className="interest-icon">
                      <FontAwesomeIcon icon={faPenNib} />
                    </div>
                    <h3>Writing</h3>
                    <p>Technical docs</p>
                  </div>
                </div>

                <div className="interests-row">
                  <div className="interest-item">
                    <div className="interest-icon">
                      <FontAwesomeIcon icon={faCamera} />
                    </div>
                    <h3>Photos</h3>
                    <p>Visual stories</p>
                  </div>

                  <div className="interest-item">
                    <div className="interest-icon">
                      <FontAwesomeIcon icon={faBookOpen} />
                    </div>
                    <h3>Learning</h3>
                    <p>Always growing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

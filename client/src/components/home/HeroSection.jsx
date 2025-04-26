import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBookOpen, faPenNib } from '@fortawesome/free-solid-svg-icons';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Personal Blog Platform</span>
          </div>

          <h1 className="hero-title">
            Welcome to <span className="text-gradient">Mark Anthony Custodio Blog</span>
          </h1>

          <p className="hero-description">
            Sharing thoughts, ideas, and experiences with the world. Join me on this journey of exploration and discovery.
          </p>

          <div className="hero-features">
            <div className="hero-feature">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faBookOpen} />
              </div>
              <span>Insightful Articles</span>
            </div>

            <div className="hero-feature">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faPenNib} />
              </div>
              <span>Creative Writing</span>
            </div>
          </div>

          <div className="hero-buttons">
            <Link to="/blogs" className="btn btn-primary">
              Explore Blogs <FontAwesomeIcon icon={faArrowRight} className="btn-icon" />
            </Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

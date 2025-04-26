import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-newsletter">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get the latest updates, news and articles directly in your inbox.</p>
            <form className="newsletter-form">
              <div className="form-group">
                <input type="email" placeholder="Your Email Address" required />
                <button type="submit">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <Link to="/" className="footer-logo">
              Personal<span>Blog</span>
            </Link>
            <p>A platform to share thoughts, ideas, and experiences with the world. Join us on this journey of exploration and discovery.</p>

            <div className="footer-contact-info">
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <span>markcustodii@gmail.com</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <span>+63 9669944246</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
                <span>PHILIPPINES, Manila City</span>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-categories">
            <h3>Categories</h3>
            <ul>
              <li><Link to="/category/web-development">Web Development</Link></li>
              <li><Link to="/category/design">Design</Link></li>
              <li><Link to="/category/technology">Technology</Link></li>
              <li><Link to="/category/programming">Programming</Link></li>
              <li><Link to="/category/lifestyle">Lifestyle</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Get In Touch</h3>
            <form className="contact-form">
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} MACBlog. All rights reserved.</p>

          <div className="social-icons">
            <a href="#" aria-label="Twitter" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" aria-label="Facebook" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" aria-label="Instagram" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" aria-label="LinkedIn" className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" aria-label="GitHub" className="social-icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

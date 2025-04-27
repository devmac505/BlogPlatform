import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = ({ links }) => {
  // Function to get the icon based on platform
  const getIconByPlatform = (platform) => {
    switch (platform) {
      case 'github':
        return faGithub;
      case 'linkedin':
        return faLinkedin;
      case 'twitter':
        return faTwitter;
      default:
        return faGithub;
    }
  };

  return (
    <div className="about-social">
      {links.map((link, index) => (
        <a 
          key={index}
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-link"
        >
          <FontAwesomeIcon icon={getIconByPlatform(link.platform)} />
        </a>
      ))}
    </div>
  );
};

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
};

export default SocialLinks;

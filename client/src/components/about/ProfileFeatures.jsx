import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

const ProfileFeatures = ({ features }) => {
  // Function to get the icon from the string name
  const getIconByName = (iconName) => {
    return solidIcons[iconName];
  };

  return (
    <div className="about-features">
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <div className="feature-icon">
            <FontAwesomeIcon icon={getIconByName(feature.icon)} />
          </div>
          <div className="feature-text">
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

ProfileFeatures.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ProfileFeatures;

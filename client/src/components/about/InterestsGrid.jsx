import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

const InterestsGrid = ({ interests }) => {
  // Function to get the icon from the string name
  const getIconByName = (iconName) => {
    return solidIcons[iconName];
  };

  // Split interests into rows of 2
  const rows = [];
  for (let i = 0; i < interests.length; i += 2) {
    rows.push(interests.slice(i, i + 2));
  }

  return (
    <div className="about-interests">
      <h3 className="interests-title">My Interests</h3>
      
      <div className="interests-grid">
        {rows.map((row, rowIndex) => (
          <div className="interests-row" key={rowIndex}>
            {row.map((interest, index) => (
              <div className="interest-item" key={index}>
                <div className="interest-icon">
                  <FontAwesomeIcon icon={getIconByName(interest.icon)} />
                </div>
                <h3>{interest.title}</h3>
                <p>{interest.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

InterestsGrid.propTypes = {
  interests: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};

export default InterestsGrid;

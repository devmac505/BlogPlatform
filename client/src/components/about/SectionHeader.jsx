import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const SectionHeader = ({ subtitle, title }) => {
  return (
    <div className="section-header">
      <span className="section-subtitle">
        <FontAwesomeIcon icon={faUser} className="subtitle-icon" /> {subtitle}
      </span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
};

SectionHeader.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default SectionHeader;

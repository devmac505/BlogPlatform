import PropTypes from 'prop-types';

const ProfileImage = ({ name }) => {
  return (
    <div className="author-image">
      <div className="image-frame">
        <div className="image-content">
          <div className="image-placeholder">
            <span>{name}</span>
          </div>
        </div>
      </div>
      <div className="image-decoration"></div>
    </div>
  );
};

ProfileImage.propTypes = {
  name: PropTypes.string.isRequired
};

export default ProfileImage;

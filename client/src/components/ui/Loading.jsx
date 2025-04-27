import PropTypes from 'prop-types';
import './Loading.css';

const Loading = ({ size = 'medium', fullPage = false, text = 'Loading...' }) => {
  if (fullPage) {
    return (
      <div className="loading-fullpage">
        <div className="loading-container">
          <div className={`loading-spinner loading-${size}`}></div>
          {text && <p className="loading-text">{text}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="loading-container">
      <div className={`loading-spinner loading-${size}`}></div>
      {text && <p className="loading-text">{text}</p>}
    </div>
  );
};

Loading.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullPage: PropTypes.bool,
  text: PropTypes.string
};

export default Loading;

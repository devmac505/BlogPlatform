import PropTypes from 'prop-types';

const ProfileStats = ({ stats }) => {
  return (
    <div className="about-stats">
      {stats.map((stat, index) => (
        <div className="stat-item" key={index}>
          <span className="stat-number">{stat.number}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

ProfileStats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ProfileStats;

import PropTypes from 'prop-types';

const StatisticItem = ({ stats }) => {
  return stats.map(({ label, percentage, id }) => {
    return (
      <li key={id} className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
    );
  });
};

StatisticItem.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default StatisticItem;

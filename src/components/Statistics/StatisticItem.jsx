import PropTypes from 'prop-types';
import css from './StatisticItem.module.css';
import generateRandomColor from './generateRandomColor';

const StatisticItem = ({ stats }) => {
  return stats.map(({ label, percentage, id }) => {
    return (
      <li
        key={id}
        className={css.item}
        style={{ backgroundColor: generateRandomColor() }}
      >
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}</span>
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

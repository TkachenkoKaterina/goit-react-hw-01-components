import PropTypes from 'prop-types';
import css from './StatisticItem.module.css';
import generateRandomColor from '../../helpers/generateRandomColor';

const StatisticItem = ({ label, percentage }) => {
  return (
    <li className={css.item} style={{ backgroundColor: generateRandomColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;

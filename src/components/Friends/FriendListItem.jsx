import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ friends }) => {
  return (
    friends &&
    friends.map(({ id, isOnline, avatar, name }) => {
      return (
        <li key={id} className={css.item}>
          <span
            className={`${css.status} ${isOnline ? css.online : css.offline}`}
          ></span>
          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li>
      );
    })
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendListItem;

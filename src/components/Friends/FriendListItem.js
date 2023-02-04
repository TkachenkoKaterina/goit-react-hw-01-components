const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className="item">
      {isOnline === true ? (
        <span className="status"></span>
      ) : (
        <span className="status"></span>
      )}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;

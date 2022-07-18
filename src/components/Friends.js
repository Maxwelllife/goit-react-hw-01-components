import PropTypes from 'prop-types';

export default function FriendsList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className="friend-list__item" key={id}>
          <span className="friend-list__status">{isOnline}</span>
          <img
            className="friend-list__img"
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className="friend-list__name">{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

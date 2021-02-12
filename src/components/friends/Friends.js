function Friends(props) {
  return (
    <div className="actions column">
      {props.friends.map(friend => (
        <p key={friend._id}>{friend.username}</p>
      ))}
    </div>
  );
}

export default Friends;

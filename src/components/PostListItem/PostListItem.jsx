import './PostListItem.css';

export default function PostListItem({post, user}) {
  return(
    <div className='DriverListItem'>
      <div>
        <div className="DriverInfo">
          <div>User: {user.name}</div>
          <div>{post.content}</div>
          <button onClick={() => handleAddToFavorite(user, driver._id)}>Add to Favorites</button>
        </div>
        <img src={driver.profileUrl} alt="" />
      </div>
    </div>
  );
}
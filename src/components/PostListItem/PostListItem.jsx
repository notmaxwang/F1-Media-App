import './PostListItem.css';

export default function PostListItem({post, user, handleDeletePost}) {


  return(
    <div className='PostListItem'>
      <div>
        <div className="PostInfo">
          <div>{user.name} said: </div>
          <div>{post.content}</div>
          <button onClick={() => handleDeletePost(post._id)}>X</button>
        </div>
      </div>
    </div>
  );
}
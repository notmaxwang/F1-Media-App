import './PostListItem.css';

export default function PostListItem({post, user}) {
  return(
    <div className='PostListItem'>
      <div>
        <div className="PostInfo">
          <div>User: {user.name}</div>
          <div>{post.content}</div>
        </div>
      </div>
    </div>
  );
}
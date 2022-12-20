import './PostListItem.css';

export default function PostListItem({post, user}) {
  return(
    <div className='PostListItem'>
      <div>
        <div className="PostInfo">
          <div>{user.name} said: </div>
          <div>{post.content}</div>
        </div>
      </div>
    </div>
  );
}
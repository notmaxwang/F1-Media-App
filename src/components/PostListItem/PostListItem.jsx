import {useState} from 'react';
import AddPostCard from '../AddPostCard/AddPostCard';
import './PostListItem.css';

export default function PostListItem({post, user, handleDeletePost, handleUpdatePost}) {

  const [showUpdate, setShowUpdate] = useState(0);

  function showUpdateCard() {
    if (showUpdate === 0) {
      setShowUpdate(1);
    } else {
      setShowUpdate(0);
    }
  }

  return(
    <div className='PostListItem'>
      <div>
        <div className="PostInfo">
          <div>{user.name} said: </div>
          <div>{post.content}</div>
          <div className="buttons">
            <button onClick={() => handleDeletePost(post._id)}>X</button>
            <button onClick={() => showUpdateCard()}>Edit</button>
          </div>
          {showUpdate ?
            <AddPostCard 
              user={user} 
              content={post.content}
              postId={post._id} 
              edit={1} 
              handleUpdatePost={handleUpdatePost}
            />
            :
            <></>
          }
        </div>
      </div>
    </div>
  );
}
import PostListItem from "../PostListItem/PostListItem";
import './UserPostList.css';

export default function UserPostList({user, userProfile, allPostList }) {
  const postIdArray = userProfile.posts;
  let storePostList = [];

  function getPost(id) {
    const temp = (allPostList.filter(post => post._id === id));
    return temp[0];
  }

  if (postIdArray) {
    storePostList = postIdArray.map((postid) => 
                                                  <PostListItem 
                                                    post={getPost(postid)} 
                                                    user={user}
                                                    key={postid} 
                                                  />);
    
  }

  return(
    <div className="UserPostList">
      User Posts: {storePostList}
    </div>

  );
}
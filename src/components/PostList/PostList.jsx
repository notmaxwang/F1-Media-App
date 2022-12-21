import PostListItem from '../PostListItem/PostListItem';
import './PostList.css';


export default function PostList({ posts, user, handleDeletePost, handleUpdatePost }) {
  const postList = posts.map((post) => <PostListItem 
                                                    post={post} 
                                                    user={user}
                                                    handleDeletePost={handleDeletePost}
                                                    handleUpdatePost={handleUpdatePost}
                                                    key={post._id} 
                                                  />);

  return (
    <main className='DriverList'>
      {postList}
    </main>
  );
}
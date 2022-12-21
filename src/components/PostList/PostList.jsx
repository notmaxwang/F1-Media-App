import PostListItem from '../PostListItem/PostListItem';
import './PostList.css';


export default function PostList({ posts, user, handleDeletePost }) {
  const postList = posts.map((post) => <PostListItem 
                                                    post={post} 
                                                    user={user}
                                                    handleDeletePost={handleDeletePost}
                                                    key={post._id} 
                                                  />);

  return (
    <main className='DriverList'>
      {postList}
    </main>
  );
}
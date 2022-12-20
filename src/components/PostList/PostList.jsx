import PostListItem from '../PostListItem/PostListItem';
import './PostList.css';


export default function PostList({ posts, user }) {
  const postList = posts.map((post) => <PostListItem 
                                                    post={post} 
                                                    user={user}
                                                    key={post._id} 
                                                  />);

  return (
    <main className='DriverList'>
      {postList}
    </main>
  );
}
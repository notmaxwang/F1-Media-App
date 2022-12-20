import { useState, useEffect } from 'react';
import * as postAPI from '../../utilities/post-api';
import PostList from '../../components/PostList/PostList';
import AddPostCard from '../../components/AddPostCard/AddPostCard';
import './DiscussionBoardPage.css'

export default function DiscussionBoardPage({user}) {

  const [posts, setPosts] = useState([]);
  const [addPostCard, setAddPostCard] = useState(0);

  useEffect(function() {
    async function getPosts() {
      const storePosts = await postAPI.getAll();
      setPosts(storePosts);
    }
    getPosts();
  }, []);

  async function handleAddPost(post) {
    const addCurrPost = await postAPI.addPost(post);
    setPosts([addCurrPost, ...posts]);
  }

  async function loadAddPostCard() {
    if (addPostCard === 0) {
      setAddPostCard(1);
    } else {
      setAddPostCard(0);
    }
  }
  
  return (
    <div className="DiscussionBoard">
      <h1>DiscussionBoardPage</h1>
      <button onClick={loadAddPostCard}>Make a Post!</button>
      { addPostCard ?
          <div className="AddPostCard">
            <AddPostCard user={user} handleAddPost={handleAddPost} setAddPostCard={setAddPostCard}/>
          </div>
        :
          <></>
      }
      <PostList posts={posts} user={user}/>
    </div>
  );
}
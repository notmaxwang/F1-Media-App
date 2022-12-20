import { useState, useEffect } from 'react';
import * as postAPI from '../../utilities/post-api';
import './DiscussionBoardPage.css'

export default function DiscussionBoardPage({user}) {

  const [posts, setPosts] = useState([]);

  useEffect(function() {
    async function getPosts() {
      const storePosts = await postAPI.getAll();
      setPosts(storePosts);
    }
    getPosts();
  }, []);

  async function handleAddPost(post) {
    const addCurrPost = await postAPI.addPost(post);
    setPosts([...posts, addCurrPost]);
  }
  
  return (
    <div className="DiscussionBoard">
      <h1>DiscussionBoardPage</h1>
      <button>Make a Post!</button>
      <PostList posts={posts}/>
    </div>
  );
}
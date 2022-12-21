import { useState, useEffect } from 'react';
import * as postAPI from '../../utilities/post-api';
import PostList from '../../components/PostList/PostList';
import AddPostCard from '../../components/AddPostCard/AddPostCard';
import './DiscussionBoardPage.css'

export default function DiscussionBoardPage({user, setAllPostList, handleDeletePost}) {

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
    setAllPostList([[...posts, addCurrPost]]);
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
      <button onClick={loadAddPostCard}>Make a Post!</button>
      { addPostCard ?
          <div className="AddPostCard">
            <AddPostCard user={user} handleAddPost={handleAddPost} setAddPostCard={setAddPostCard}/>
          </div>
        :
          <></>
      }
      <h1>User Posts:</h1>
      <PostList posts={posts} user={user} handleDeletePost={handleDeletePost}/>
    </div>
  );
}
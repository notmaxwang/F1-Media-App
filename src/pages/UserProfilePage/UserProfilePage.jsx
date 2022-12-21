import { useState, useEffect } from 'react';
import UserFavoriteCard from '../../components/UserFavoriteCard/UserFavoriteCard';
import UserInfoCard from '../../components/UserInfoCard/UserInfoCard';
import UserPostList from '../../components/UserPostList/UserPostList';
import * as profileAPI from '../../utilities/profile-api';


export default function UserProfilePage({ user, allDriverList, allPostList, userProfile, handleDeletePost, handleUpdatePost }) {
  


  async function handleAddToFavorite(user, driver) {
    
    // 1. Call the addFavorite function in profileAPI, passing to it the user, and assign the resolved promise to a variable named updatedProfile.
    const updatedProfile = await profileAPI.addFavorite(user, driver);
    // 2. Update the cart state with the updated cart received from the server
    // setCurrUserProfile(updatedProfile);
  }
  
  return(
    <div>
      <h2>{user.name}'s Profile Page</h2>
      <UserInfoCard user={user} />
      <UserPostList user={user} userProfile={userProfile} allPostList={allPostList} handleDeletePost={handleDeletePost} handleUpdatePost={handleUpdatePost}/>
      <UserFavoriteCard user={user} userProfile={userProfile} drivers={allDriverList} handleAddToFavorite={handleAddToFavorite}/>
    </div>
  );
}
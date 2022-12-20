import { useState, useEffect } from 'react';
import UserFavoriteCard from '../../components/UserFavoriteCard/UserFavoriteCard';
import UserInfoCard from '../../components/UserInfoCard/UserInfoCard';
import * as profileAPI from '../../utilities/profile-api';



export default function UserProfilePage({ user, allDriverList }) {

  const [userProfile, setUserProfile] = useState([]);

  useEffect(function() {
    async function getUserProfile() {
      const currProfile = await profileAPI.getProfile(user);
      setUserProfile(currProfile);
    }
    getUserProfile();
  }, [])

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
      <UserFavoriteCard drivers={allDriverList} userProfile={userProfile} user={user} handleAddToFavorite={handleAddToFavorite}/>
    </div>
  );
}
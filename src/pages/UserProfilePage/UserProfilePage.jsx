import { useState, useEffect } from 'react';
import UserFavoriteCard from '../../components/UserFavoriteCard/UserFavoriteCard';
import UserInfoCard from '../../components/UserInfoCard/UserInfoCard';
import * as profileAPI from '../../utilities/profile-api';



export default function UserProfilePage({ user }) {

  const [userProfile, setUserProfile] = useState([]);

  useEffect(function() {
    async function getUserProfile() {
      const currProfile = await profileAPI.getProfile(user);
      setUserProfile(currProfile);
    }
    getUserProfile();
  }, [])

  return(
    <div>
      <h2>{user.name}'s Profile Page</h2>
      <UserInfoCard user={user} />
      <UserFavoriteCard userProfile={userProfile}/>
    </div>
  );
}
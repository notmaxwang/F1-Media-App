import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TeamList from '../../components/TeamList/TeamList';
import DriverList from '../../components/DriverList/DriverList';
import * as profileAPI from '../../utilities/profile-api';
import './DriverPage.css'


export default function DriverPage({user, allDriverList , allTeamList}) {
  const [currDrivers, setCurrDrivers] = useState([allDriverList[1], allDriverList[2]]);
  const [currUserProfile, setCurrUserProfile] = useState([]);
  const [activeTeam, setActiveTeam] = useState(allTeamList[0]);
  const navigate = useNavigate();

  useEffect(function() {
    async function getInfo() {
      const currProfile = await profileAPI.getProfile(user);
      setCurrUserProfile(currProfile);
    }
    getInfo();
  }, []);


  async function handleAddToFavorite(user, driver) {
    
    // 1. Call the addFavorite function in profileAPI, passing to it the user, and assign the resolved promise to a variable named updatedProfile.
    const updatedProfile = await profileAPI.addFavorite(user, driver);
    // 2. Update the cart state with the updated cart received from the server
    // setCurrUserProfile(updatedProfile);
  }
  
  return (
    <main className="DriverPage" style={{backgroundImage: `url(${activeTeam.teamLogoUrl})`,
                                         backgroundRepeat: 'repeat',
                                         backgroundSize: '40%',
                                        }}>
      <TeamList 
        allDrivers={allDriverList}
        allTeams={allTeamList}
        activeTeam={activeTeam}
        setCurrDrivers={setCurrDrivers}
        setActiveTeam={setActiveTeam} 
      />
      <DriverList 
        drivers={currDrivers}
        user={user} 
        handleAddToFavorite={handleAddToFavorite}                          
      />
    </main>
  );
}
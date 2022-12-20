import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as driverAPI from '../../utilities/driver-api';
import * as teamAPI from '../../utilities/team-api';
import TeamList from '../../components/TeamList/TeamList';
import DriverList from '../../components/DriverList/DriverList';
import * as profileAPI from '../../utilities/profile-api';
import './DriverPage.css'


export default function DriverPage({user}) {
  const [allDriverList, setAllDriverList] = useState([]);
  const [allTeams, setAllTeams] = useState([]);
  const [currDrivers, setCurrDrivers] = useState([]);
  const [currUserProfile, setCurrUserProfile] = useState([]);
  const [activeTeam, setActiveTeam] = useState('');
  const navigate = useNavigate();

  useEffect(function() {
    async function getDrivers() {
      const drivers = await driverAPI.getAll();
      const teamList = await teamAPI.getAll();
      const currProfile = await profileAPI.getProfile(user);
      setCurrUserProfile(currProfile);
      setAllDriverList(drivers);
      setAllTeams(teamList);
      setActiveTeam(teamList[0]);
      console.log(allDriverList[0].team.name);
      setCurrDrivers(allDriverList.filter(driver => driver.team === teamList[0]));
    }
    getDrivers();
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
        allTeams={allTeams}
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
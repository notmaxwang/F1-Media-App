import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as driverAPI from '../../utilities/driver-api';
import * as teamAPI from '../../utilities/team-api';
import TeamList from '../../components/TeamList/TeamList';
import DriverList from '../../components/DriverList/DriverList';
import './DriverPage.css'


export default function DriverPage() {
  const [allDriverList, setAllDriverList] = useState([]);
  const [allTeams, setAllTeams] = useState([]);
  const [currDrivers, setCurrDrivers] = useState([]);
  const [activeTeam, setActiveTeam] = useState('');
  const navigate = useNavigate();

  useEffect(function() {
    async function getDrivers() {
      const drivers = await driverAPI.getAll();
      const teamList = await teamAPI.getAll();
      setAllDriverList(drivers);
      setAllTeams(teamList);
      setActiveTeam(teamList[0]);
      setCurrDrivers(allDriverList.filter(driver => driver.team === teamList[0].name));
    }
    getDrivers();
  }, []);

  
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
      <DriverList drivers={currDrivers} />
    </main>
  );
}
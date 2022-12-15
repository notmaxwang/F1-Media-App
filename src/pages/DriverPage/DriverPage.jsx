import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as driverAPI from '../../utilities/driver-api';
import TeamList from '../../components/TeamList/TeamList';
import DriverList from '../../components/DriverList/DriverList';
import './DriverPage.css'

export default function DriverPage() {
  const [driverList, setDriverList] = useState([]);
  const [activeTeam, setActiveTeam] = useState('');
  const teamsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function() {
    async function getDrivers() {
      const drivers = await driverAPI.getAll();
      teamsRef.current = [...new Set(drivers.map(driver => driver.team.name))];
      setDriverList(drivers);
      setActiveTeam(teamsRef.current[0]);
    }
    getDrivers();
  }, []);

  
  return (
    <main className="DriverPage">
      <TeamList 
        teams={teamsRef.current}
        activeTeam={activeTeam}
        setActiveTeam={setActiveTeam} 
      />
      <DriverList drivers={driverList.filter(driver => driver.team.name === activeTeam)} />
    </main>
  );
}
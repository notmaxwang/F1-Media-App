import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import DiscussionBoardPage from '../DiscussionBoardPage/DiscussionBoardPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import DriverPage from '../DriverPage/DriverPage';
import UserProfilePage from '../UserProfilePage/UserProfilePage';
import * as driverAPI from '../../utilities/driver-api';
import * as teamAPI from '../../utilities/team-api';
import './App.css';
import { useEffect } from 'react';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [allDriverList, setAllDriverList] = useState([]);
  const [allTeamList, setAllTeamList] = useState([]);

  useEffect(function() {
    async function getData() {
      const driverList = await driverAPI.getAll();
      const teamList = await teamAPI.getAll();
      setAllDriverList(driverList);
      setAllTeamList(teamList);
    }
    getData();
  }, []);

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              {/* <Route path="/boards/:raceid/new" element={<NewThreadPage />} /> */}
              <Route path="/boards" element={<DiscussionBoardPage user={user}/>} />
              <Route path="/drivers" element={<DriverPage user={user} allDriverList={allDriverList} allTeamList={allTeamList}/>}/>
              <Route path="/user" element={<UserProfilePage user={user} allDriverList={allDriverList}/>}/>
              <Route path="/" element={<HomePage user={user}/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}

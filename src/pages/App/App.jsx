import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
// import NewThreadCard from '../../components/NewThreadCard/NewThreadCard';
import DiscussionBoardPage from '../DiscussionBoardPage/DiscussionBoardPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import DriverPage from '../DriverPage/DriverPage';
import UserProfilePage from '../UserProfilePage/UserProfilePage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              {/* <Route path="/boards/:raceid/new" element={<NewThreadPage />} /> */}
              <Route path="/boards" element={<DiscussionBoardPage />} />
              <Route path="/drivers" element={<DriverPage />}/>
              <Route path="/user" element={<UserProfilePage />}/>
              <Route path="/" element={<HomePage user={user}/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}

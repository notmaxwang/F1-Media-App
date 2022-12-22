import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar sticky-top bg-light">
      <Link to="/"className="btn btn-sm btn-outline-secondary">Home</Link>
      <Link to="/boards" className="btn btn-sm btn-outline-secondary">Discussion Boards</Link>
      <Link to="/races" className="btn btn-sm btn-outline-secondary">Races</Link>
      <Link to="/drivers"className="btn btn-sm btn-outline-secondary">Drivers</Link>
      <Link to="/user"className="btn btn-sm btn-outline-secondary">User Profile</Link>
      <Link to="" onClick={handleLogOut} className="btn btn-sm btn-outline-secondary">Log Out</Link>
    </nav>
  );
}


import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar sticky-top bg-light">
      <Link to="/boards" className="btn btn-sm btn-outline-secondary">Race Discussion Boards</Link>
      <Link to="/drivers"className="btn btn-sm btn-outline-secondary">Drivers</Link>
      <Link to="/"className="btn btn-sm btn-outline-secondary">Home</Link>
      <Link to="" onClick={handleLogOut} className="btn btn-sm btn-outline-secondary">Log Out</Link>
    </nav>
  );
}
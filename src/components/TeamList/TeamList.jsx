import './TeamList.css';

export default function TeamList({ allDrivers, allTeams, activeTeam, setActiveTeam, setCurrDrivers }) {
  function setDriverAndTeam(team) {
    setActiveTeam(team);
    const currDrivers = allDrivers.filter(driver => driver.team.name === team.name);
    setCurrDrivers(currDrivers);
  }

  const ts = allTeams.map(team =>
    <li
      key={team}
      className={team === activeTeam ? 'active' : ''}
      onClick={() => setDriverAndTeam(team)}
    >
      {team.name}
    </li>
  );
  return (
    <ul className="TeamList">
      {ts}
    </ul>
  );
}
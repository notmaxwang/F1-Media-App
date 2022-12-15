import './TeamList.css';

export default function TeamList({ teams, activeTeam, setActiveTeam }) {
  const ts = teams.map(team =>
    <li
      key={team}
      className={team === activeTeam ? 'active' : ''}
      onClick={() => setActiveTeam(team)}
    >
      {team}
    </li>
  );
  return (
    <ul className="TeamList">
      {ts}
    </ul>
  );
}
import RaceListItem from '../RaceListItem/RaceListItem';
import './RaceList.css';

export default function RaceList({raceData}) {
  if(raceData.length === 0) return null;
  const raceList = raceData.map((race, idx) => <RaceListItem 
                                            race={race}
                                            key={idx}
                                          />);

  return(
    <main className="RaceList">
      {raceList}
    </main>
  );                                   
}
import './RaceListItem.css';

export default function RaceListItem({race}) {
  return(
    <>
    <div className='RaceListItem'>
      <div className="RaceInfo">
        <div>Race Name: {race.raceName}</div>
        <div>Race Url: {race.url}</div>
        <div>Circuit: {race.Circuit.circuitName}</div>
      </div>
    </div>
    </>
  );
}



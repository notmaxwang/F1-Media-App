import './RaceListItem.css';

export default function RaceListItem({race}) {
  console.log(race);
  const storeString = "https://maps.googleapis.com/maps/api/staticmap?center=" + race.Circuit.circuitName + "&zoom=10&size=400x400&key=AIzaSyDp47ITLFT42_qYew2Z-VnlJ5n77D-PtUQ"
  return(
    <>
    <div className='RaceListItem'>
      <div className="RaceInfo">
        <div>Race Name: {race.raceName}</div>
        <div>Race Date: {race.date}</div>
        <div>Circuit: {race.Circuit.circuitName}</div>
        <img src={storeString} alt="" />
      </div>
    </div>
    </>
  );
}



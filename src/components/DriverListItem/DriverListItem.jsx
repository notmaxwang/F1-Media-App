import './DriverListItem.css';

export default function DriverListItem({driver, user, handleAddToFavorite}) {
  return(
    <div className='DriverListItem'>
      <div>
        <div className="DriverInfo">
          <div>Driver Name: <span className="smaller">{driver.name}</span></div>
          <div>Driver Age: <span className="smaller">{driver.age}</span></div>
          <div>Driver Natioality: <span className="smaller">{driver.nationality}</span></div>
          <button onClick={() => handleAddToFavorite(user, driver._id)}>Add to Favorites</button>
        </div>
        <img src={driver.profileUrl} alt="" />
      </div>
    </div>
  );
}
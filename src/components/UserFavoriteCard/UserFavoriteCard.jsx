import DriverListItem from '../DriverListItem/DriverListItem';
import './UserFavoriteCard.css';


export default function UserFavoriteCard({ user, userProfile, drivers, handleAddToFavorite}) {
  const driverIdArray = userProfile.favDrivers;

  let storeDriverList = [];
  
  
  function getDriver(id) {
    const temp = (drivers.filter(driver => driver._id === id));
    return temp[0];
  }

  if (driverIdArray) {
    storeDriverList = driverIdArray.map((driverid, idx) => 
                                                  <DriverListItem 
                                                    driver={getDriver(driverid)} 
                                                    user={user}
                                                    handleAddToFavorite={handleAddToFavorite}
                                                    key={idx} 
                                                  />);
    
  }


  return(
    <div className='UserFavoriteCard'>
      <div className="UserFavorite">
        <div>Favorite Drivers: {storeDriverList}</div>
      </div>
    </div>
  );
}
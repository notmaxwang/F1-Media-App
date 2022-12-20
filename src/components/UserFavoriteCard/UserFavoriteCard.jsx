import DriverListItem from '../DriverListItem/DriverListItem';


export default function UserFavoriteCard({drivers, userProfile, user, handleAddToFavorite}) {
  const driverIdArray = userProfile.favDrivers;
  let storeDriverList = [];
  
  function getDriver(id) {
    const temp = (drivers.filter(driver => driver._id === id));
    console.log(temp);
    return temp;
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
        <div>Still in development phase!!</div>
        <div>Favorite Drivers: {storeDriverList}</div>
      </div>
    </div>
  );
}
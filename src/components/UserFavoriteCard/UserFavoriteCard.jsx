import DriverListItem from '../DriverListItem/DriverListItem';
import {useState} from 'react';


export default function UserFavoriteCard({drivers, userProfile, user, handleAddToFavorite}) {
  const driverIdArray = userProfile.favDrivers;
  let storeDriverList = [];
  
  if (driverIdArray) {
    storeDriverList = driverIdArray.map((driverid, idx) => 
      // let currDriver = (drivers.filter(driver => driver._id === driverid));
                                                    <DriverListItem 
                                                    driver={(drivers.filter(driver => driver._id === driverid))} 
                                                    user={user}
                                                    handleAddToFavorite={handleAddToFavorite}
                                                    key={idx} 
                                                  />);
  }

  console.log(storeDriverList);

  return(
    <div className='UserFavoriteCard'>
      <div className="UserFavorite">
        <div>Still in development phase!!</div>
        <div>Favorite Drivers: {storeDriverList}</div>
      </div>
    </div>
  );
}
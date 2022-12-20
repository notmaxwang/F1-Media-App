import DriverListItem from '../DriverListItem/DriverListItem';
import './DriverList.css';


export default function DriverList({ drivers, user, handleAddToFavorite }) {
  console.log(drivers);
  const driverList = drivers.map((driver, idx) => <DriverListItem 
                                                    driver={driver} 
                                                    user={user}
                                                    handleAddToFavorite={handleAddToFavorite}
                                                    key={driver._id} 
                                                  />);

  return (
    <main className='DriverList'>
      {driverList}
    </main>
  );
}
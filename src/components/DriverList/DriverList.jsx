import DriverListItem from '../DriverListItem/DriverListItem';
import './DriverList.css';


export default function DriverList({ drivers, user, handleAddToFavorite }) {
  const driverList = drivers.map((driver, idx) => <DriverListItem 
                                                    driver={driver} 
                                                    user={user}
                                                    handleAddToFavorite={handleAddToFavorite}
                                                    key={idx} 
                                                  />);

  return (
    <main className='DriverList'>
      {driverList}
    </main>
  );
}
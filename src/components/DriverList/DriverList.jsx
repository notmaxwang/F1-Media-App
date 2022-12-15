import DriverListItem from '../DriverListItem/DriverListItem';
import './DriverList.css';


export default function DriverList({ drivers }) {
  const driverList = drivers.map((driver, idx) => <DriverListItem driver={driver} key={idx} />);

  return (
    <main className='DriverList'>
      {driverList}
    </main>
  );
}
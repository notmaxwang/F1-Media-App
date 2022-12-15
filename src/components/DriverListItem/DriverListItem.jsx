import './DriverListItem.css';

export default function DriverListItem({driver}) {
  return(
    <div className='DriverListItem'>
      <div>
        <div className="DriverInfo">
          <div>Driver Name: <span className="smaller">{driver.name}</span></div>
          <div>Driver Age: <span className="smaller">{driver.age}</span></div>
          <div>Driver Natioality: <span className="smaller">{driver.nationality}</span></div>
        </div>
        <img src={driver.profileUrl} alt="" />
      </div>
    </div>
  );
}
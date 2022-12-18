export default function UserFavoriteCard({userProfile}) {
  return(
    <div className='UserFavoriteCard'>
      <div className="UserFavorite">
        <div>Favorite Drivers: {userProfile.favDrivers}</div>
        <div>User Posts: {userProfile.posts}</div>
      </div>
    </div>
  );
}
export default function UserInfoCard({user}) {
  return(
    <div className='UserInfoCard'>
      <div className="UserInfo">
        <div>User Name: {user.name}</div>
        <div>User Email: {user.email}</div>
      </div>
    </div>
  );
}
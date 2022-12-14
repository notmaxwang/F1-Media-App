export default function HomePage({user}) {
  return(
    <>
      <h1>Start exploring, {user.name}!</h1>
      <h2>Popular Race Threads</h2>
    </>
  );
}
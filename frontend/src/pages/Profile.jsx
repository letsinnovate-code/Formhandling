
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.users);
  
  return (
    <div className="flex flex-col justify-center items-center h-screen`">
      <h1>Profile</h1>
      <p>Name: {user?.name}</p>
      <p>Username: {user?.username}</p>
      <p>Age: {user?.age}</p>
      <p>Email: {user?.email}</p>
    </div>
  )
}

export default Profile
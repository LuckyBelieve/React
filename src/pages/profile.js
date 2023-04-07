import ChangeProfile from "./changeProfile";
import {useSelector } from "react-redux";
const Profile = () => {
 const username = useSelector((state)=>state.user.value)
    return (
        <div className="profile">
            <h1>this is the profile page</h1>
            <h1>this is the username:{username}</h1>
            <h2>change the username</h2>
            <ChangeProfile />
        </div>
    );
}
 
export default Profile;
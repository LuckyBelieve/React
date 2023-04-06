import ChangeProfile from "./changeProfile";
import { useContext } from "react";
import { AppContext } from "../App";
const Profile = () => {
    const {username} = useContext(AppContext)
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
import { useState } from "react";
import { login,logout } from './redux/userSlice'
import { useDispatch} from "react-redux";
import { useContext } from "react";
import { AppContext } from "../App";
const ChangeProfile = () => {
    const {username,setUsername} = useContext(AppContext);
 const [newUsername,setNewUsername] = useState("")

 const dispatch = useDispatch()
    return (
        <div className="changeProfile">
            <input type="text" 
            onChange={(e)=>setNewUsername(e.target.value)}
            />
            <button onClick={()=> dispatch(login(newUsername))}>change username</button>
            <button onClick={()=>dispatch(logout())}>Logout</button>
            <h1>{username}</h1>
            <button onClick={()=>setUsername("believe that you can do it")}>set the name above</button>
        </div>
    );
}
 
export default ChangeProfile;
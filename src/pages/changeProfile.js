import { useState } from "react";
import { login,logout } from './redux/userSlice'
import { useDispatch} from "react-redux";
const ChangeProfile = () => {
 const [newUsername,setNewUsername] = useState("")
 const dispatch = useDispatch()
    return (
        <div className="changeProfile">
            <input type="text" 
            onChange={(e)=>setNewUsername(e.target.value)}
            />
            <button onClick={()=> dispatch(login(newUsername))}>change username</button>
            <button onClick={()=>dispatch(logout())}>Logout</button>
        </div>
    );
}
 
export default ChangeProfile;
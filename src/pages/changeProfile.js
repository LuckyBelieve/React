import { useContext,useState } from "react";
import { AppContext } from "../App";
const ChangeProfile = () => {
    const {setUsername} = useContext(AppContext)
    const [newUsername,setNewUsername] = useState("");
    return (
        <div className="changeProfile">
            <input type="text" onChange={(e)=>setNewUsername(e.target.value)}/>
            <button onClick={()=>setUsername(newUsername)}>change profile</button>
        </div>
    );
}
 
export default ChangeProfile;
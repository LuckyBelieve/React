import { useContext } from "react";
import { AppContext } from "../App";
const Homepage = () => {
    const {username} = useContext(AppContext)
    return (
        <div className="homepage">
            <h1>this is the home page</h1>
            <h1>the username is:{username}</h1>
        </div>
    );
}
 
export default Homepage;
import { useSelector } from "react-redux";
const Homepage = () => {
const username = useSelector((state)=>state.user.value)
    return (
        <div className="homepage">
            <h1>this is the home page</h1>
            <h1>the username is:{username}</h1>
        </div>
    );
}
 
export default Homepage;
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
           <Link to='/'>home</Link>
           <Link to='/profile'>profile</Link>
           <Link to='/contact'>contact</Link>
           <Link to='/counterApp'>counterApp</Link>
        </div>
    );
}
 
export default Navbar;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Nav = ()=> {
    const [userState, setUserState] = useState(0);
    return (
       <>
        <ul className="nav">
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
        <button onClick={()=> {setUserState(!userState)}}>{userState ? "signout": "signin"}</button>
       </>
    )
}
export default Nav;
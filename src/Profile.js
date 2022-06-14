import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import {useParams, useLocation, useHistory, useRouteMatch} from "react-router-dom";
import Edit from "./edit";
import View from "./view";

const Profile = ()=> {
    const history = useHistory();
    const {path, url} = useRouteMatch();
    //console.log(useRouteMatch());
    // useEffect(()=> {
    //     history.push("/")
    // }, [])
   // const param = new URLSearchParams(useLocation());
   
    return (
        <>
            Profile Works
            <ul>
                <li>
                    <Link to={`${url}/edit`}>Edit Profile</Link>
                </li>
                <li>
                    <Link to={`${url}/view`}>View Profile</Link>
                </li>
            </ul>
            
             <Route path={`${path}/edit`} component={Edit}></Route>
             <Route path={`${path}/view`} component={View}></Route>
            
            
        </>
    )

}
export default Profile;
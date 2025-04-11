import {useLocation} from "react-router-dom";

const Profile = () => {

    const location = useLocation();
    const {username} = location.state || {}

    return (  
        <div className="profile">
            <h1>Welcome {username || "Guest"}</h1>
            <p>This is profile page</p>
        </div>
    );
}
 
export default Profile;
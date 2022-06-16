import { Link } from "react-router-dom";
import { useLocation } from "react-router";


const Profile = () => {
  const { state } = useLocation();
  return (
    <div className="container-profile">
      
      <nav className="navbar-style">
      <h1>Profile</h1>
      <button className="btn-logout">
        <Link to="/" className="link-logout">Log out</Link>
      </button>
      </nav>
      <div className="information-profile">
      <h1>Username : {state.userName}</h1>
      <h1>Email : {state.email}</h1>
      </div>
    </div>
  );
};

export default Profile;

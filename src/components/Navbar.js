import { Link } from "react-router";
function Navbar() {
  return (
    <div className="navbar">
      <h2>SkillBridge</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/create-service">Create</Link>
        <Link to="/my-services">My Services</Link>
      </div>
    </div>
  );
}

export default Navbar;

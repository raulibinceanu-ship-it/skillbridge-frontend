import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    window.location.href = "/";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        borderBottom: "1px solid #eee",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "#1dbf73" }}>SkillBridge</h2>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/">Home</Link>

        {token && (
          <>
            <Link to="/my-services">My Services</Link>
            <Link to="/profile">Profile</Link>
          </>
        )}

        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;

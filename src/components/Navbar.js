import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Link to="/" style={{ color: "white", marginRight: "15px" }}>
          Home
        </Link>

        {token && (
          <>
            <Link
              to="/create-service"
              style={{ color: "white", marginRight: "15px" }}
            >
              Create
            </Link>

            <Link
              to="/my-services"
              style={{ color: "white", marginRight: "15px" }}
            >
              My Services
            </Link>
          </>
        )}
      </div>

      <div>
        {!token ? (
          <>
            <Link to="/login" style={{ color: "white", marginRight: "15px" }}>
              Login
            </Link>

            <Link to="/register" style={{ color: "white" }}>
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "#222",
        padding: "15px",
        color: "white",
        display: "flex",
        gap: "20px",
      }}
    >
      <h2>SkillBridge</h2>

      <a href="/" style={{ color: "white" }}>
        Home
      </a>
      <a href="/login" style={{ color: "white" }}>
        Login
      </a>
      <a href="/create-service" style={{ color: "white" }}>
        Create
      </a>
      <a href="/my-services" style={{ color: "white" }}>
        My Services
      </a>
    </div>
  );
}

export default Navbar;

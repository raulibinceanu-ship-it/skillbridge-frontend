import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import CreateService from "./pages/CreateService";
function App() {
  const path = window.location.pathname;
  return (
    <div>
      <Navbar />
      {path === "/login" ? <Login /> : <Home />}
      {path === "/create-service" && <CreateService />}
      {path === "/" && <Home />}
    </div>
  );
}

export default App;

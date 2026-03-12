import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import CreateService from "./pages/CreateService";
import MyServices from "./pages/MyServices";
function App() {
  const path = window.location.pathname;
  return (
    <div>
      <Navbar />
      {path === "/login" ? <Login /> : <Home />}
      {path === "/create-service" && <CreateService />}
      {path === "/my-services" && <MyServices />}
      {path === "/" && <Home />}
    </div>
  );
}

export default App;

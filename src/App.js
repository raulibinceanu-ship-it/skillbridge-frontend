import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
function App() {
  const path = window.location.pathname;
  return (
    <div>
      <Navbar />
      {path === "/login" ? <Login /> : <Home />}
    </div>
  );
}

export default App;

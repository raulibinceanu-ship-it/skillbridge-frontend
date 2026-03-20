import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateService from "./pages/CreateService";
import MyServices from "./pages/MyServices";
import Navbar from "./components/Navbar";
import "./App.css";
import Register from "./pages/Register";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-service" element={<CreateService />} />
        <Route path="/my-services" element={<MyServices />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

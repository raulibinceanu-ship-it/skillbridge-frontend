import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateService from "./pages/CreateService";
import MyServices from "./pages/MyServices";
import Navbar from "./components/Navbar";
import "./App.css";
import Register from "./pages/Register";
import ServiceDetail from "./pages/ServiceDetail";
import EditService from "./pages/EditService";
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
        <Route path="/edit/:id" element={<EditService />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

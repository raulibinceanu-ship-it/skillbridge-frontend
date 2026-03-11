import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";

function Home() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h1>Available Services</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Home;

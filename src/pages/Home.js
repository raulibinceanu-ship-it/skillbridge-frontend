import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";

function Home() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/services")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Errore nel fetch");
        }
        return res.json();
      })
      .then((data) => setServices(data))
      .catch((error) => {
        console.log("Errore gestito:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Available Services</h1>

      <div className="services">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Home;

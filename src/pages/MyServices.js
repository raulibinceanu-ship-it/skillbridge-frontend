import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";

function MyServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:8080/api/services/my-services", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h1>My Services</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default MyServices;

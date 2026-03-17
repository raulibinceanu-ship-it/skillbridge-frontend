import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";

function MyServices() {
  const [services, setServices] = useState([]);
  const deleteService = (id) => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:8080/api/services/" + id, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then(() => {
      setServices(services.filter((service) => service.id !== id));
    });
  };
  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:8080/api/services/my-services", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>My Services</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onDelete={deleteService}
          />
        ))}
      </div>
    </div>
  );
}

export default MyServices;

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
    })
      .then(() => {
        setServices(services.filter((s) => s.id !== id));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    fetch("http://localhost:8080/api/services/my-services", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Errore server");
        }
        return res.json();
      })
      .then((data) => {
        console.log("DATA:", data);

        if (Array.isArray(data)) {
          setServices(data);
        } else {
          setServices([]);
        }
      })
      .catch((err) => console.log("Errore:", err));
  }, []);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>My Services</h1>

      {services.length === 0 ? (
        <p style={{ textAlign: "center" }}>No services yet</p>
      ) : (
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onDelete={deleteService}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyServices;

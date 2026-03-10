import { useEffect, useState } from "react";

function Home() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h1>SkillBridge Services</h1>

      {services.map((service) => (
        <div key={service.id}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <p>{service.price} €</p>
        </div>
      ))}
    </div>
  );
}

export default Home;

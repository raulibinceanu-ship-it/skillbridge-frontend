import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/services/" + id)
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!service) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  return (
    <div className="container">
      <h1>{service.title}</h1>

      <p style={{ marginTop: "20px" }}>{service.description}</p>

      <h2 style={{ marginTop: "20px" }}>{service.price} €</h2>

      <p style={{ color: "gray" }}>{service.category}</p>

      <button
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Contact Seller
      </button>
    </div>
  );
}

export default ServiceDetail;

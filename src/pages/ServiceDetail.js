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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        padding: "40px",
      }}
    >
      {/* SINISTRA */}
      <div style={{ width: "60%" }}>
        <h1>{service.title}</h1>

        <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
          {service.description}
        </p>

        <p style={{ marginTop: "20px", color: "gray" }}>
          Category: {service.category}
        </p>
      </div>

      {/* DESTRA (BOX PREZZO) */}
      <div
        style={{
          width: "250px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          height: "fit-content",
        }}
      >
        <h2>{service.price} €</h2>

        <button
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "10px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default ServiceDetail;

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

        <hr style={{ margin: "20px 0" }} />

        <h3>About this service</h3>
        <p>
          This service includes full support and delivery based on your needs.
        </p>

        <p style={{ marginTop: "10px", color: "gray" }}>
          Category: {service.category}
        </p>
      </div>

      {/* DESTRA */}
      <div
        style={{
          width: "280px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          height: "fit-content",
        }}
      >
        <h2>{service.price} €</h2>

        <p style={{ fontSize: "14px", color: "gray" }}>Delivery in 3 days</p>

        <button
          onClick={() => {
            const token = localStorage.getItem("token");

            if (!token) {
              alert("Login required");
              window.location.href = "/login";
            } else {
              alert("Order placed (fake)");
            }
          }}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "10px",
            backgroundColor: "#1dbf73",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default ServiceDetail;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!service) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
        padding: "40px",
        maxWidth: "1200px",
        margin: "0 auto",
        alignItems: "flex-start",
      }}
    >
      <div style={{ flex: 2 }}>
        <img
          src={
            service.imageUrl ||
            "https://via.placeholder.com/800x400?text=Service+Image"
          }
          alt={service.title}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
          }}
        />

        <h1>{service.title}</h1>

        <p style={{ color: "gray", marginBottom: "20px" }}>
          by {service.freelancer?.email || "User"}
        </p>

        <p style={{ lineHeight: "1.7", fontSize: "16px" }}>
          {service.description}
        </p>
      </div>

      <div
        style={{
          flex: 1,
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          position: "sticky",
          top: "20px",
          backgroundColor: "white",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>{service.price} €</h2>

        <p style={{ fontSize: "14px", color: "gray" }}>
          High quality service guaranteed
        </p>

        <button
          onClick={() => {
            const token = localStorage.getItem("token");

            if (!token) {
              alert("Devi fare login prima");
              window.location.href = "/login";
            } else {
              alert("Ordine simulato 🚀");
            }
          }}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "12px",
            backgroundColor: "#1dbf73",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Continue
        </button>

        <ul style={{ marginTop: "20px", fontSize: "14px" }}>
          <li>✔️ Fast delivery</li>
          <li>✔️ 100% satisfaction</li>
          <li>✔️ Support included</li>
        </ul>
      </div>
    </div>
  );
}

export default ServiceDetail;

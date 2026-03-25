import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);

  const token = localStorage.getItem("token");
  const userEmail = localStorage.getItem("email");

  useEffect(() => {
    fetch(`http://localhost:8080/api/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!service) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div style={{ padding: "40px" }}>
      <img
        src={
          service.imageUrl ||
          "https://via.placeholder.com/800x400?text=Service+Image"
        }
        alt={service.title}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />

      <h1>{service.title}</h1>

      <p style={{ color: "gray" }}>by {service.freelancer?.email || "User"}</p>

      <p>{service.description}</p>

      <h2>{service.price} €</h2>

      {service.freelancer?.email === userEmail && (
        <button
          onClick={() => (window.location.href = `/edit/${service.id}`)}
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#ff9800",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Edit Service
        </button>
      )}

      <button
        onClick={() => {
          if (!token) {
            alert("Devi fare login prima");
            window.location.href = "/login";
          } else {
            alert(
              "Ordine simulato con successo! (Non c'è un vero ordine dietro)",
            );
          }
        }}
        style={{
          marginTop: "20px",
          padding: "12px",
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
  );
}

export default ServiceDetail;

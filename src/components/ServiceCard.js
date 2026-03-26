import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.id}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          overflow: "hidden",
          backgroundColor: "white",
          transition: "0.3s",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <img
          src={
            service.imageUrl && service.imageUrl.startsWith("http")
              ? service.imageUrl
              : "https://via.placeholder.com/300x180?text=Service"
          }
          alt={service.title}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            display: "block",
          }}
        />

        <div style={{ padding: "10px", flexGrow: 1 }}>
          <p style={{ fontSize: "12px", color: "gray" }}>{service.category}</p>

          <h3 style={{ fontSize: "16px" }}>{service.title}</h3>

          <p style={{ color: "#f5c518" }}>⭐⭐⭐⭐⭐</p>

          <p>
            <b>{service.price} €</b>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ServiceCard;

import { useNavigate } from "react-router-dom";

function ServiceCard({ service, onDelete }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/service/" + service.id)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "250px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "white",
        cursor: "pointer",
        transition: "0.2s",
      }}
    >
      <h3>{service.title}</h3>

      <p style={{ color: "#555" }}>{service.description}</p>

      <p>
        <b>{service.price} €</b>
      </p>

      <p style={{ fontSize: "12px", color: "gray", transition: "0.2s" }}>
        {service.category}
      </p>

      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(service.id);
          }}
          style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            padding: "5px 10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default ServiceCard;

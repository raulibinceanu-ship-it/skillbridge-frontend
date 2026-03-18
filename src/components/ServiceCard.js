function ServiceCard({ service, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "250px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "white",
      }}
    >
      <h3>{service.title}</h3>

      <p style={{ color: "#555" }}>{service.description}</p>

      <p>
        <b>{service.price} €</b>
      </p>

      <p style={{ fontSize: "12px", color: "gray" }}>{service.category}</p>

      {onDelete && (
        <button
          onClick={() => onDelete(service.id)}
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

function ServiceCard({ service }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "250px",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{service.title}</h3>

      <p>{service.description}</p>

      <p>
        <b>{service.price} €</b>
      </p>

      <p>{service.category}</p>
    </div>
  );
}

export default ServiceCard;

function ServiceCard({ service, onDelete }) {
  return (
    <div className="card">
      <h3>{service.title}</h3>

      <p>{service.description}</p>

      <p>
        <b>{service.price} €</b>
      </p>

      <p>{service.category}</p>

      {onDelete && <button onClick={() => onDelete(service.id)}>Delete</button>}
    </div>
  );
}

export default ServiceCard;

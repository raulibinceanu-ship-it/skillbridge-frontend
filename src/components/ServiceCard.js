function ServiceCard({ service, onDelete }) {
  return (
    <div className="card">
      <h3>{service.title}</h3>

      <p className="description">{service.description}</p>

      <p className="price">{service.price} €</p>

      <p className="category">{service.category}</p>

      {onDelete && (
        <button className="delete-button" onClick={() => onDelete(service.id)}>
          Delete
        </button>
      )}
    </div>
  );
}

export default ServiceCard;

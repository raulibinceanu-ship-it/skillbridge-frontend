import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const token = localStorage.getItem("token");
  const userEmail = localStorage.getItem("email");

  useEffect(() => {
    fetch(`http://localhost:8080/api/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((err) => console.log(err));
    fetch(`http://localhost:8080/api/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [id]);

  if (!service) return <p style={{ textAlign: "center" }}>Loading...</p>;
  const submitReview = () => {
    fetch(`http://localhost:8080/api/reviews/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment,
        rating,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setComment("");
        setRating(5);
        window.location.reload();
      });
  };
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
      <div style={{ marginTop: "40px" }}>
        <h3>Leave a review</h3>

        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>

        <input
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ display: "block", marginTop: "10px", width: "100%" }}
        />

        <button onClick={submitReview} style={{ marginTop: "10px" }}>
          Submit
        </button>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3>Reviews</h3>

        {reviews.map((r) => (
          <div key={r.id} style={{ marginBottom: "15px" }}>
            <strong>{"⭐".repeat(r.rating)}</strong>
            <p>{r.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceDetail;

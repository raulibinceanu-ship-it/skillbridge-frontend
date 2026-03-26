import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";

function Home() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    setLoading(true);

    let url = "http://localhost:8080/api/services/filter?";

    if (category) {
      url += "category=" + category + "&";
    }

    if (maxPrice) {
      url += "maxPrice=" + maxPrice;
    }

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Errore fetch");
        }
        return res.json();
      })
      .then((data) => {
        setServices(data);
      })
      .catch((err) => {
        console.log("Errore:", err);
        setServices([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category, maxPrice]);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
        Find the perfect service
      </h1>

      <p style={{ textAlign: "center", color: "gray", marginBottom: "20px" }}>
        Explore services from freelancers around the world 🌍
      </p>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={() => {
            const token = localStorage.getItem("token");

            if (!token) {
              alert("You must login first");
              window.location.href = "/login";
            } else {
              window.location.href = "/create-service";
            }
          }}
          style={{
            padding: "10px 15px",
            backgroundColor: "#1dbf73",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          + Create Service
        </button>
      </div>

      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <input
          placeholder="Search by category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            marginRight: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <input
          placeholder="Max price (€)"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : services.length === 0 ? (
        <p style={{ textAlign: "center" }}>No services available </p>
      ) : (
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
            alignItems: "stretch",
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

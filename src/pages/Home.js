import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category, maxPrice]);

  return (
    <div className="container">
      <h1>Available Services</h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Link to="/create-service">
          <button className="button">+ Create Service</button>
        </Link>
      </div>

      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />

        <input
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={{ padding: "8px" }}
        />
      </div>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : services.length === 0 ? (
        <p className="loading">No services available</p>
      ) : (
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

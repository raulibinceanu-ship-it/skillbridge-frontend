import { useState } from "react";
import { useEffect } from "react";
function CreateService() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You must login first");
      window.location.href = "/login";
    }
  }, []);
  const createService = () => {
    console.log("CLICK");

    const token = localStorage.getItem("token");

    fetch("http://localhost:8080/api/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        title,
        description,
        price: Number(price),
        category,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Servizio creato!");
        window.location.href = "/";
      })
      .catch((err) => {
        console.error(err);
        alert("Errore");
      });
  };

  return (
    <div className="container">
      <h1>Create Service</h1>

      <div className="form">
        <input
          placeholder="Title (ex.I will build your website)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Describe what you offer, what is included, delivery time..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            height: "100px",
            marginBottom: "10px",
            padding: "8px",
            width: "100%",
          }}
        />

        <input
          placeholder="Price (ex. 50)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          placeholder="Category (ex. Web Development)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button onClick={createService}>Create Service</button>
      </div>
    </div>
  );
}

export default CreateService;

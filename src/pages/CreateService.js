import { useState } from "react";

function CreateService() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const createService = () => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:8080/api/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        category: category,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Servizio creato!");
      });
  };

  return (
    <div>
      <h2>Create Service</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <br />

      <button onClick={createService}>Create Service</button>
    </div>
  );
}

export default CreateService;

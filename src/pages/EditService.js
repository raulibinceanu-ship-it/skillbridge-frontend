import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function EditService() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/services/" + id)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
        setPrice(data.price);
        setCategory(data.category);
        setImageUrl(data.imageUrl);
      });
  }, [id]);

  const updateService = () => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:8080/api/services/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title,
        description,
        price,
        category,
        imageUrl,
      }),
    }).then(() => {
      alert("Service updated!");
      window.location.href = "/my-services";
    });
  };

  return (
    <div className="container">
      <h1>Edit Service</h1>

      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />

      <input value={price} onChange={(e) => setPrice(e.target.value)} />
      <br />

      <input value={category} onChange={(e) => setCategory(e.target.value)} />
      <br />

      <input
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <br />

      <button onClick={updateService}>Save</button>
    </div>
  );
}

export default EditService;

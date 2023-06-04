import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Update() {
  const [addbook, setAddBook] = useState({
    coverimg: "",
    name: "",
    author: "",
    price: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setAddBook((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleUpdate = async (e) => {
    try {
      await axios.put("http://localhost:5000/books/" + bookId, addbook);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      <h1>Update New Book</h1>

      <input
        type="text"
        placeholder="Enter your BookName"
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book Author"
        name="author"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Price"
        name="price"
        onChange={handleChange}
      />
      <input
        type="file"
        placeholder="Upload Cover image"
        name="coverimg"
        onChange={handleChange}
      />
      <button onClick={handleUpdate}>Update Book</button>
    </div>
  );
}

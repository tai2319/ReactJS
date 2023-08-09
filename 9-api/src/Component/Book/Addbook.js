import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import "./Addbook.css";

const AddBooks = () => {
  const [title, setTitle] = useState([]);
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://my-json-server.typicode.com/codegym-vn/mock-api-books/books",
        {
          title,
          quantity,
        }
      );
      alert("Book added successfully!");
      setTitle("");
      setQuantity("");
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };
  return (
    <>
      <h1> Add New Books</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Quantity</label>
        <input
          type="text"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
        <button type="submit">ADD</button>
      </form>

      <Link to="/">
        <button> Back to Book List</button>
      </Link>
    </>
  );
};

export default AddBooks;

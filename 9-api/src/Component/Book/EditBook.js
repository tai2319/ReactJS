import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Editbook.css";
import axios from "axios";

const EditBooks = () => {
  const { id } = useParams();
  const [title, setTitle] = useState([]);
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const response = await axios.get(
        `https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`
      );
      setTitle(response.data.title);
      setQuantity(response.data.quantity);
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`,
        {
          title,
          quantity,
        }
      );
      alert("Book updated successfully!");
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };
  return (
    <>
      <h1>Edit</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
      <Link to="/">
        <button>Back to Book List</button>
      </Link>
    </>
  );
};

export default EditBooks;

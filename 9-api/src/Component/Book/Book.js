import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Book.css";
import axios from "axios";

const Bookmanagement = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/codegym-vn/mock-api-books/books"
      );

      setBooks(response.data);
    } catch (error) {
      console.error("faide fetching data", error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`
      );
      alert("Delete succesful!");
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book", error);
    }
  };

  return (
    <>
      <h1>Libary</h1>
      <Link to="/add-book">
        <button>Add new Book</button>
      </Link>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td>
                <Link to={`/edit-book/${book.id}`}>
                  <button>Edit</button>
                </Link>
                <button
                  className="delete"
                  onClick={() => handleDelete(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Bookmanagement;

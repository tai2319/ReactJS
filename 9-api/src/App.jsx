import "./App.css";
import Bookmanagement from "./Component/Book/Book";
import AddBooks from "./Component/Book/Addbook";
import EditBooks from "./Component/Book/EditBook";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/" className="nav-link" activeClassName="active-link">
            Book List
          </Link>
          <Link
            to="/add-book"
            className="nav-link"
            activeClassName="active-link"
          >
            Add Book
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Bookmanagement />} />
          <Route path="/add-book" element={<AddBooks />} />
          <Route path="/edit-book/:id" element={<EditBooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

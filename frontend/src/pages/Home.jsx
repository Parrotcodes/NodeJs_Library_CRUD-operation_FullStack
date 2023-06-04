import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:5000/books/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = (e) => {};
  return (
    <div>
      <h1>Welcome to my Bookstore</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            coverimg: {book.coverimg && <img src="" alt="coverimg" />}
            <h2>Book Name: {book.name}</h2>
            <h4>Author: {book.author}</h4>
            <p>Price: {book.price}</p>
            <button
              style={{ background: "red", color: "white" }}
              onClick={() => handleDelete(book.id)}
            >
              Delete
            </button>
            &nbsp;&nbsp;&nbsp;
            <button
              style={{ background: "blue", color: "white" }}
              onClick={handleClick}
            >
              <Link to={`/update/${book.id}`}>Update</Link>{" "}
            </button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add"> Add New Book </Link>
      </button>
    </div>
  );
}

import "./App.css";
import "./styles/style.css";
// import { useState } from "react";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Update from "./pages/Update";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WordPad from "./pages/WordPad";

function App() {
  // const [books, setBooks] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/wordpad" element={<WordPad />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

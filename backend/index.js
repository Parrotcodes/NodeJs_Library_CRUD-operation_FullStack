const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  username: "root",
  password: "",
  database: "test",
});

app.get("/", (req, res) => {
  res.json("Welcome to Home page!");
});

app.get("/books", (req, res) => {
  const q = "select * from book";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//inset query using nodejs
app.post("/books", (req, res) => {
  const q = "insert into book(`coverimg`,`name`,`author`,`price`) values(?)";
  const value = [
    req.body.coverimg,
    req.body.name,
    req.body.author,
    req.body.price,
  ];

  db.query(q, [value], (err, data) => {
    if (err) return res.json(err);
    return res.json("book inseted..");
  });
});

//Delete query using nodejs
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "delete from book where id = ?";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been deleted successfully!");
  });
});

// Update query using nodejs
app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q =
    "update book set `coverimg`=?,`name`=?,`author`=?,`price`=? where id = ?";
  const values = [
    req.body.coverimg,
    req.body.name,
    req.body.author,
    req.body.price,
  ];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("book updated successfully!");
  });
});

app.listen("5000", (req, res) => {
  console.log("Backend server started running.......");
});

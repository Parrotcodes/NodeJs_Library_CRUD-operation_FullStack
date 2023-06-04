import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Add() {

  const [addbook,setAddBook] = useState({
    coverimg:'',
    name:'',
    author:'',
    price:'',
  })

  const navigate = useNavigate()

  const handleChange = (e)=>{
    setAddBook(prev=>({...prev,[e.target.name]:[e.target.value]}));
  }

  const handleClick = async e =>{
    try {
      await axios.post('http://localhost:5000/books',addbook)
      navigate('/')
    } catch (err) {
      console.log(err)      
    }
  }

  return (
    <div className="add">
      <h1>Add New Book</h1>

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
      <button onClick={handleClick}>Add Book</button>
    </div>
  );
}

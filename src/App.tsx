import React, {useEffect} from 'react';
import './App.css';
import {Product} from "./components/Product";
import axios from "axios";

function App() {


  async function getProducts() {
    const res = await axios.get('https://fakestoreapi.com/products')
    console.log(res.data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="container mx-auto max-w-2xl pt-5">
    <Product />
    </div>
  );
}

export default App;

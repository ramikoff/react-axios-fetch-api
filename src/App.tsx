import React, { useEffect, useState } from 'react'
import './App.css'
import { Product } from './components/Product'
import axios from 'axios'
import { IProduct } from './models'

function App() {
  const [products, setProducts] = useState<IProduct[]>([])

  async function getProducts() {
    const res = await axios.get('https://fakestoreapi.com/products')
    setProducts(res.data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {products.map(product => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  )
}

export default App

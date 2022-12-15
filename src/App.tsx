import React from 'react'
import './App.css'
import { Product } from './components/Product'
import { Loading } from './components/Loading'
import { Error } from './components/Error'
import { useProducts } from './hooks/useProducts'

function App() {
  const { products, loading, error } = useProducts()
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loading />}
      {error && <Error errorMessage={error} />}
      {products.map(product => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  )
}

export default App

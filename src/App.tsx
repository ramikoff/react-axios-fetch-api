import React, { useState } from 'react'
import './App.css'
import { Product } from './components/Product'
import { Loader } from './components/Loader'
import { Error } from './components/Error'
import { useProducts } from './hooks/useProducts'
import { Modal } from './components/Modal'
import { CreateProduct } from './components/CreateProduct'
import { IProduct } from './models'

function App() {
  const { products, loading, error, addProduct } = useProducts()
  const [modal, setModal] = useState(true)

  const createHandler = (product: IProduct) => {
    setModal(false)
    addProduct(product)
  }

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <Error errorMessage={error} />}
      {products.map(product => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title='Create new product' onClose={() => setModal(false)}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}

      <button
        className='border py-2 px-4 bg-yellow-400 hover:text-white fixed right-5 bottom-5 rounded text-2xl'
        onClick={() => setModal(true)}>
        +
      </button>
    </div>
  )
}

export default App

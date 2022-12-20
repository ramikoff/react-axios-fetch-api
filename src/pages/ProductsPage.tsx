import React, { useContext } from 'react'
import { useProducts } from '../hooks/useProducts'
import { ModalContext } from '../context/ModalContext'
import { IProduct } from '../models'
import { Loader } from '../components/Loader'
import { Error } from '../components/Error'
import { Product } from '../components/Product'
import { Modal } from '../components/Modal'
import { CreateProduct } from '../components/CreateProduct'

function ProductsPage() {
  const { products, loading, error, addProduct } = useProducts()
  const { modal, openModal, closeModal } = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    closeModal()
    addProduct(product)
  }

  return (
    <div className='container mx-auto max-w-2xl pt-20'>
      {loading && <Loader />}
      {error && <Error errorMessage={error} />}
      {products.map(product => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title='Create new product' onClose={closeModal}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}

      <button
        className='border py-2 px-4 bg-yellow-400 hover:text-white fixed right-5 bottom-5 rounded text-2xl'
        onClick={openModal}>
        +
      </button>
    </div>
  )
}

export default ProductsPage

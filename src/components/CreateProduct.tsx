import { IProduct } from '../models'
import axios from 'axios'
import { useState } from 'react'
import { Error } from './Error'

const productData: IProduct = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10
  }
}

interface CreateProductProps {
  onCreate: (product: IProduct) => void
}

export const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()

    if (value.trim().length === 0) {
      setError('Please enter valid title...')
      return
    }
    productData.title = value
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
    onCreate(response.data)
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        className='border py-2 px-4 mb-2 w-full outline-0'
        placeholder='Enter product title...'
        onChange={changeHandler}
        value={value}
      />
      {error && <Error errorMessage={error} />}
      <button type='submit' className='border py-2 px-4 bg-yellow-400 hover:text-white'>
        Create
      </button>
    </form>
  )
}

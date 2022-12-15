import { useEffect, useState } from 'react'
import { IProduct } from '../models'
import axios, { AxiosError } from 'axios'

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  async function getProducts() {
    try {
      setLoading(true)
      const res = await axios.get('https://fakestoreapi.com/products?limit=5')
      setProducts(res.data)
      setLoading(false)
    } catch (e: unknown) {
      setLoading(false)
      const error = e as AxiosError
      setError(error.message)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return { products, loading, error }
}

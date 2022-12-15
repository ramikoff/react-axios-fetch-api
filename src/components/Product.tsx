import { IProduct } from '../models'
import React, { useState } from 'react'
import { Button } from './Button'
import { Description } from './Description'

interface ProductProps {
  product: IProduct
}

export const Product = ({ product }: ProductProps) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
      <img src={product.image} alt={product.title} className='w-1/6' />
      <p>{product.title}</p>
      <p>
        Price: <span className='font-bold'>{product.price}</span>
      </p>
      <Button
        onClick={() => {
          setShowInfo(prevState => !prevState)
        }}
        showInfo={showInfo}
      />
      {showInfo && <Description info={product.description} rate={product.rating.count} />}
    </div>
  )
}

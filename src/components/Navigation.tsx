import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className='h-[50px] flex justify-between px-5 bg-gray-500 text-white items-center fixed w-full'>
      <span className='font-bold'>
        <Link to='/'>React 2022</Link>
      </span>
      <span>
        <Link to='/' className='mr-2'>
          Products
        </Link>
        <Link to='/about'>About</Link>
      </span>
    </nav>
  )
}

export default Navigation

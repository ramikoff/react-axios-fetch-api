import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import About from './pages/About'
import Navigation from './components/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<ProductsPage />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </>
  )
}

export default App

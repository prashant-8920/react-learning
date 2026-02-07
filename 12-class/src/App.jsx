import  Home  from './pages/Home'
import  Nav  from './pages/Nav'
import  Products  from './pages/Products'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Nav' element={<Nav/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>
    </div>
  )
}

export default App

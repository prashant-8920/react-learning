import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Nav from './pages/Nav'
import Courses from './pages/Courses'
import Kodr from './pages/Kodr'
import Kodex from './pages/Kodex'


const App = () => {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Courses' element={<Courses/>} >
          <Route path='/Courses/kodr' element={<Kodr/>} />
          <Route path='/Courses/kodex' element={<Kodex/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App

import React, { useContext } from 'react'
import Navbar from './Components/Navbar'
import Section from './Components/Section'
import Footer from './Components/Footer'
import { ThemeContextData } from './Context/ThemeContext'

const App = () => {

  const [theme] = useContext(ThemeContextData)

  return (
    <div className={theme}>
      <Navbar/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default App

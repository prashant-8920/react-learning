import React from 'react'
import { useContext } from 'react'
import { ThemeContextData } from '../Context/ThemeContext'

const Footer = () => {
  const [theme, setTheme] = useContext(ThemeContextData);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  return (
    <div className='footer'>
      <h1>Footer</h1>
       <p>{theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Footer

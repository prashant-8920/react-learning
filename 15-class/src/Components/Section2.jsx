import React from 'react'
import { useContext } from 'react'
import { ThemeContextData } from '../Context/ThemeContext'  


const Section2 = () => {

    const [theme, setTheme] = useContext(ThemeContextData);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='section2'>
      <h2>Section 2</h2>
      <p>{theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Section2

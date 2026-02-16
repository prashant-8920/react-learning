import { useContext } from 'react'
import { ThemeContextData } from '../Context/ThemeContext'

const Section1 = () => {

  const [theme, setTheme] = useContext(ThemeContextData);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`section1 ${theme}`}>
      <h2>Section 1</h2>
      <p>{theme}</p>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  )
}

export default Section1

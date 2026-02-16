import { useContext } from 'react'
import {ThemeContextData} from '../Context/ThemeContext'

const Navbar = () => {

    const [theme, setTheme] = useContext(ThemeContextData);

  return (
    <div className='nav'>
        <h1>Navbar </h1>
        <h2>{theme}</h2>

        <button 
            onClick={() => 
            setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            change theme
        </button>
    </div>
  )
}

export default Navbar

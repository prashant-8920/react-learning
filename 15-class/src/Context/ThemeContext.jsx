import { createContext,useState } from 'react';

export const ThemeContextData = createContext();

const ThemeContext = (props) => {


const [theme, settheme] = useState('light');

  return (
    
        <ThemeContextData.Provider value={[theme, settheme]}>
            {props.children}
        </ThemeContextData.Provider>    
    
  )
}

export default ThemeContext

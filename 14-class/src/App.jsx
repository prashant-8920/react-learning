import React,{useState} from 'react'
import Nav from './pages/Nav'

const App = () => {

  

  const [theme, setTheme] = useState('#667eea')
  const changeTheme = (newTheme)=>{
    setTheme(newTheme)
  }

  return (
    <div className= "app"
   style={
    theme.startsWith('linear-gradient')
      ? { background: theme }
      : { backgroundColor: theme }
  }
    >
      <h1>Theme is {theme}</h1>
      <Nav changeTheme={changeTheme} />

    </div>
  )
}

export default App

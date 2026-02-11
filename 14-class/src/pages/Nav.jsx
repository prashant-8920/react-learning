import React ,{useState} from 'react'

const Nav = (props) => {

    const [newTheme, setNewTheme] = useState('')
  return (
    <div className='nav'>
      <form onSubmit={(e)=>{
            e.preventDefault()
            props.changeTheme(newTheme)
            setNewTheme('')
      }}>
        <input 
        value={newTheme}
        
        onChange={(e)=>{
            setNewTheme(e.target.value)
        }}  
        type="text" 
        placeholder='Enter theme'
        />
        <button>submit</button>
      </form>
    </div>
  )
}

export default Nav

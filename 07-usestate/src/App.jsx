import React,{ useState } from 'react'

const App = () => {

    const [num, setnum] = useState(0)

  return (
    <div className='parent'>
      
      <h1 className='counter'>Counter</h1>

      <h1 className='num'>{num}</h1>

      <button 
      onClick={()=>{
        setnum(num+1)
      }}
      >+1</button>
      
      <button onClick={()=>{
        setnum(num+5)
      }}>+5</button>
      
      <button  onClick={() => setnum(prev => Math.max(0, prev - 1))}
          disabled={num === 0}>-1</button>

      <button onClick={()=>{
        setnum(0)
      }}>Reset</button>

      
    </div>
  )
}

export default App



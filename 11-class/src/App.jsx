import axios from 'axios'
import React, { useEffect,useState } from 'react'

const App = () => {
    
  const [userName, setuserName] = useState('');
  const [num, setnum] = useState(0);


  const getData = async ()=>{
      const response = await axios.get('https://randomuser.me/api/');
       const user = response.data.results[0].name;
       setuserName(user.first + ' ' + user.last);
      
  }

  useEffect(()=>{
    getData();
  },[num])


  return (
    <div className='app-container'>
      <h1>{userName}</h1>
      <h1>{num}</h1>
      <button onClick={()=>{
        setnum(num+1);
      }}>increse</button>
    </div>
  )
}

export default App

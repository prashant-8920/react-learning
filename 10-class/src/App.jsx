import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './components/User'

const App = () => {
  const [allData, setAllData] = useState([])

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      setAllData(response.data)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="all-cards">
      {allData.map((elem) => (
        <User key={elem.id} elem={elem} />
      ))}
    </div>
  )
}

export default App

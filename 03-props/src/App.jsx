import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className='parent'>
      <Card user = 'Aman' age = {18} img ="https://m.media-amazon.com/images/I/61sAQjY-BYL.jpg" />
      <Card user = 'Prashant' age = {21} img="https://sowpeace.in/cdn/shop/files/DSC_9629_Copy_Copy_Copy_500x600_crop_center.jpg?v=1741760419" />
    </div>
  )
}

export default App

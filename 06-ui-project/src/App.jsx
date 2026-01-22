import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/Section2/Section2'
import Navbar from './components/section1/Navbar'

function App() {
    const users = [
      {
        img: 'https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
        intro: '',
        tag: 'satiesfied'
      },
      {
        img: 'https://plus.unsplash.com/premium_photo-1661766513512-c32d32da0c06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
        intro: '',
        tag: 'Underserved'
      },
      {
        img: 'https://plus.unsplash.com/premium_photo-1661547974543-a6139af5ded2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro: '',
        tag: 'Underbanked'
      }
      
    ]

  return (
    <div>
      <Section1/>
      <Section2/>
    </div>
  )
}

export default App

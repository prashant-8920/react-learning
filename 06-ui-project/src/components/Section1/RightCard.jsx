import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = () => {
  return (
    <div className=' shrink-0 overflow-hidden relative h-full w-80 rounded-4xl'>
      <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       <RightCardContent/> 
    </div>
  )
}

export default RightCard

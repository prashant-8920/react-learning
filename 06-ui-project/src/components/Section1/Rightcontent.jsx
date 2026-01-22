import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'
const Rightcontent = (props) => {
    console.log(props);
    
  return (
    <div id='right' className='h-full p-6 rounded-4xl w-2/3 flex overflow-x-auto flex-nowrap gap-10'>
    {props.users.map(function (elem,idx) {
      
      return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} />
    })}
      
    </div>
  )
}

export default Rightcontent

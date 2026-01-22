import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1Content = (props) => {
  return (
    <div className='flex items-center gap-10 pb-16 pt-10 h-[90vh] px-18'>
        <Leftcontent/>
        <Rightcontent users ={props.users} />
    </div>
  )
}

export default Page1Content

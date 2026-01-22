import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1Content = () => {
  return (
    <div className='flex items-center gap-10 py-10 h-[90vh] px-18'>
        <Leftcontent/>
        <Rightcontent/>
    </div>
  )
}

export default Page1Content

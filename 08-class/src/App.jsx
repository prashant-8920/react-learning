import { UserLock } from 'lucide-react'
import React, { useState } from 'react'
import Card from './component/card'


const App = () => {

  const [userName, setuserName] = useState('')
  const [userRole, setuserRole] = useState('')
  const [imageUrl, setimageUrl] = useState('')
  const [userDescription, setuserDescription] = useState('')

  const [allUsers, setallUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const oldUsers = [...allUsers]
    oldUsers.push({ userName, userRole, imageUrl, userDescription })
    setallUsers(oldUsers);

    setuserName('');
    setuserRole('');
    setimageUrl('');
    setuserDescription('');
  }

  const deleteHandler=(idx)=>{
    const copyUsers = [...allUsers]

    copyUsers.splice(idx,1)

    setallUsers(copyUsers)
    
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='p-2 py-2 flex flex-wrap ' >

        <input
          value={userName}
          onChange={(e) => {
            setuserName(e.target.value)
          }}
          className='border-2 text-xl semibold px-5 py-2 rounded m-2 lg:w-[48%]'
          type="text"
          placeholder='Enter Your Name' />

        <input
          value={userRole}
          onChange={(e) => {
            setuserRole(e.target.value)
          }}
          className='border-2 text-xl semibold px-5 py-2 rounded m-2 lg:w-[48%]'
          type="text"
          placeholder='Enter Role' />

        <input
          value={imageUrl}
          onChange={(e) => {
            setimageUrl(e.target.value)
          }}
          className='border-2 text-xl semibold px-5 py-2 rounded m-2 lg:w-[48%]'
          type="text"
          placeholder='Img url' />

        <input
          value={userDescription}
          onChange={(e) => {
            setuserDescription(e.target.value)
          }}
          className='border-2 text-xl semibold px-5 py-2 rounded m-2 lg:w-[48%]'
          type="text"
          placeholder='Enter Description' />


        <button
          className=' px-5 py-2 text-xl semibold active:scale-95 cursor-pointer bg-green-400 rounded m-2 w-[97%]'>
          Create User
        </button>
      </form>

      <div className="px-4 py-10 flex flex-wrap gap-4">
        {allUsers.map((elem,idx)=>{
          return <Card 
                    elem={elem} 
                    deleteHandler={deleteHandler}
                    key={idx} 
                    idx={idx} 
                />
                
          
        })}
      </div>

    </div>

  )
}

export default App



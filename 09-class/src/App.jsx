import React, { useState } from 'react'


const App = () => {

  const [userName, setuserName] = useState('')
  const [userRole, setuserRole] = useState('')
  const [imageUrl, setimageUrl] = useState('')
  const [userDescription, setuserDescription] = useState('')


  const localData = JSON.parse(localStorage.getItem('all-users')) || []
  console.log(localData);
  

  const [allUsers, setallUsers] = useState(localData)

  const submitHandler = (e) => {
    e.preventDefault();

    const oldUsers = [...allUsers]

    oldUsers.push({ userName, userRole, imageUrl, userDescription })

    setallUsers(oldUsers);

    localStorage.setItem('all-users', JSON.stringify(oldUsers));

    setuserName('');
    setuserRole('');
    setimageUrl('');
    setuserDescription('');
  }

  const deleteHandler=(idx)=>{
    const copyUsers = [...allUsers]

    const conf = confirm('Are you sure want to delete this elemnet.');

    if(conf){
      copyUsers.splice(idx,1)
    }else{
      alert('element is not deleted');
    }


    setallUsers(copyUsers)
    localStorage.setItem('all-users', JSON.stringify(copyUsers))
    
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
          return <div className="w-full sm:w-[90%] md:w-[45vw] lg:w-[23vw] h-80 rounded-xl px-8 py-8 flex flex-col items-center text-center bg-white text-black">
      
      <img
        className="h-24 w-24 rounded-full object-cover"
        src={elem.imageUrl}
        alt=""
      />

      <h1 className="text-2xl mt-2 font-bold">
        {elem.userName}
      </h1>

      <h5 className="text-blue-500 text-lg font-semibold my-3">
        {elem.userRole}
      </h5>

      <p className="text-sm font-medium leading-tight">
        {elem.userDescription}
      </p>

      <button
        onClick={() => deleteHandler(idx)}
        className="px-4 py-2 mt-3 text-xs bg-red-600 text-white rounded active:scale-95"
      >
        Remove
      </button>
    </div>
                
          
        })}
      </div>

    </div>

  )
}

export default App



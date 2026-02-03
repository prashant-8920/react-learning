import React from 'react'

const Card = (props) => {
  return (
    <div className="w-full sm:w-[90%] md:w-[45vw] lg:w-[23vw] h-80 rounded-xl px-8 py-8 flex flex-col items-center text-center bg-white text-black">
      
      <img
        className="h-24 w-24 rounded-full object-cover"
        src={props.elem.imageUrl}
        alt=""
      />

      <h1 className="text-2xl mt-2 font-bold">
        {props.elem.userName}
      </h1>

      <h5 className="text-blue-500 text-lg font-semibold my-3">
        {props.elem.userRole}
      </h5>

      <p className="text-sm font-medium leading-tight">
        {props.elem.userDescription}
      </p>

      <button
        onClick={() => props.deleteHandler(props.idx)}
        className="px-4 py-2 mt-3 text-xs bg-red-600 text-white rounded active:scale-95"
      >
        Remove
      </button>
    </div>
  )
}

export default Card

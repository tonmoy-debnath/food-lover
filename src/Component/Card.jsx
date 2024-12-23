import React from 'react'
import star from "../assets/star.png"

function Card({menu}) {
  return (
    <div className='rounded-lg  border-red-500 flex flex-col items-center space-y-4 py-4 px-6 bg-zinc-300 shadow-orange-500 shadow-md'>
      <img src={menu.pizza} alt="food" className='w-48'/>
      <h2 className='text-2xl font-semibold'>{menu.name}</h2>
      <p>{menu.desc} 
        <div className=' flex items-center justify-center'><img src={star} width={15} height={15} alt='star' />{menu.rating} </div>
        </p>
      <button className='px-3 py-2 bg-red-500 text-white rounded-lg w-full'>Order Now</button>
    </div>
  )
}

export default Card
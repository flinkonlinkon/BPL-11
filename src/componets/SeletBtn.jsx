import React, { useState } from 'react'



export default function SeletBtn({xdata}) {
    let {playerId,name,country,image,role,biddingPrice,battingType,bowlingType} = xdata
    
    

  return (
    <>
    <div>
      <div className='w-11/12 mx-auto h-16 flex justify-between border rounded-lg mt-2 mb-2 p-2'>
      <div className='flex gap-3'>
      <img className='rounded-lg' src={image} alt="" />
      <div>
        <p className='font-bold'>{name}</p>
        <p className='font-medium'>{role}</p>
      </div>
      </div>
      <button className='btn'><img className='w-5' src="https://i.ibb.co.com/tpD43G5/delete.png" alt="" /></button>
      </div>
    </div>
    
    </>

  )
}

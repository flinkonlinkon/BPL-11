import React from 'react'


export default function Card({data,ChossBTN,arr,ys,yes}) {
  let {playerId,name,country,image,role,biddingPrice,battingType,bowlingType} = data
  
  return (
    <div>
      <div className="card bg-base-100 w-[360px] shadow-xl">
  <figure className="px-3 pt-3">
    <img 
      src={image}
      alt={name}
      className="rounded-xl bg-cover" />
  </figure>
  <div className="">
    <div className='flex'>
        <img className='w-5 h-5 mr-2' src="https://i.ibb.co.com/JKKm3b4/user.png" alt="" />
        <p className='text-black font-bold text-lg'>{name}</p>
    </div>
    <div className='border-b-2 flex justify-between'>
        <div className='flex gap-2'>
            <img className='text-[#898989] w-5 h-5' src="https://i.ibb.co.com/vzgWmVt/finish.png" alt="" />
            
             
            <p className='text-[#898989]'>{country}</p>
        </div>
        <button className='btn bg-[#F3F3F3] mt-1'>{role}</button>

    </div>
    <div className='flex'>
        <div className='w-1/2'>
        <h2 className="font-bold">Rating</h2>
    <br />
    <p className="font-bold">{bowlingType}</p>
    <br />
    <p className="font-bold">Price: ${biddingPrice}</p>
        </div>
    
    <div className="w-1/2">
        <p className='text-[#898989] mb-3'>{battingType}</p>
      <button onClick={()=>ChossBTN(data)}  className='btn text-[#131313]'>Choose Player</button>
    </div>
    </div>
  </div>
</div>
    </div>
  )
}

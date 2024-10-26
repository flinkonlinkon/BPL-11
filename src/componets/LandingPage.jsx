import React from 'react'

export default function LandingPage({taka,freeTaka,arr}) {
  
    let pic = 'https://i.ibb.co.com/7NjBgm0/bg-shadow.png'
  return (
    <div className='mt-14 '>
      <div className='w-11/12 mx-auto bg-black rounded-lg' style={{backgroundImage: `url(${pic})`}} >
      <div className='mx-auto items-center h-52 w-64'>

<img className='' src="https://i.ibb.co.com/ZL0PQr9/banner-main.png" alt="" /></div>
<div>
    <p className='text-4xl font-bold text-white mb-3'>Assemble Your Ultimate Dream 11 Cricket Team</p>
    <p className='text-2xl font-medium text-[#B9B9B9] mb-3'>Beyond Boundaries Beyond Limits</p>
    <button onClick={freeTaka} className='btn text-black bg-[#E4FB29] mb-10'>Claim Free Credit</button>
</div>
</div>
    </div>
  )
}

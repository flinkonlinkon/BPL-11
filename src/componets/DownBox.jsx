import React from 'react'

export default function DownBox() {
    let pic = 'https://i.ibb.co.com/7NjBgm0/bg-shadow.png'
  return (
    <div className='w-11/12 mx-auto backdrop-blur-lg rounded-lg mt-20'>
        <div className='w-10/12 rounded-lg mb-20 p-5' style={{backgroundImage: `url(${pic})`}}>
        <p className='text-5xl font-bold mt-5'>Subscribe to our Newsletter</p>
        <p className='text-[#898989] mt-3 mb-3'>Get the latest updates and news right in your inbox!</p>
        <input
  type="text"
  placeholder="Enter your email"
  class="input input-bordered input-primary w-full max-w-xs" />
  <button className='btn bg-[#E09C83]'>Subscribe</button>
        </div>
      
    </div>
  )
}

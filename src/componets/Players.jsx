import React, { useState } from 'react'
import Card from './Card'
import DownBox from './DownBox'
import Footer from './footer'
import SeletBtn from './SeletBtn'


export default function Players({apiData,ChossBTN,arr,ys,yes}) {
  

  
  
  return (
    <div className='w-11/12 mx-auto mt-5'>
      <div className='flex justify-between'>
        <div>
            <p className={` text-4xl font-bold ${ys ? '' : 'hidden'}`}>Available Players</p>
            <p className={` text-4xl font-bold ${ys ? 'hidden' : ''}`}>Selected Player {arr.length}/6</p>


        </div>
        <div >
            <button onClick={yes} className={`btn text-[#131313] ${ys ? 'bg-green-400' : ''}`}>Available</button>
            <button onClick={yes} className={`btn text-[#131313] ${ys ? '' : 'bg-green-400'}`}>Selected {arr.length}</button>
        </div>
      </div>
      


      
      

      
       
      
        
          
  

{ys ? (
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
    {apiData.map((data, inx) => (
      <Card key={inx} data={data} ChossBTN={ChossBTN} arr={arr} ys={ys} yes={yes} />
    ))}
  </div>
) : (
  arr.map((xdata, inx) => (
    <SeletBtn key={inx} xdata={xdata} />
  ))
)}

<button onClick={yes} className={`btn text-[#131313] ${ys ? 'hidden' : 'bg-green-400'}`} >Add More Player</button>






      

      
      


      <DownBox></DownBox>
      <Footer></Footer>
    </div>
  )
}

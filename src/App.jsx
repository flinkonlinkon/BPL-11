
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import './App.css'
import LandingPage from './componets/LandingPage'
import NavBar from './componets/NavBar'
import Players from './componets/Players'
import SeletBtn from './componets/SeletBtn'

function App() {
  let [ys,setYs] = useState(true)
  function yes(){
    setYs(!ys)
    console.log(ys);
    
  }
  let [taka,setTaka] = useState(0)
  function freeTaka(){
    setTaka(5000000 + taka)

    toast.success('Taka Add Successfully', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      
      });
    
  }

  let [apiData,setApiData] = useState([])
  useEffect(()=>{
    async function Api() {
      let url = await fetch('Play.json')
      let data = await url.json()
      setApiData(data)
      

    }
    Api()

  },[])
  let [arr, setArr] =useState([])

  function ChossBTN(Api){
    if(Api.biddingPrice >= taka){

      return  toast.error('Taka not enough', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        
        });
      

      
    }else{
      toast.success('Player added successfully', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        
        });
      console.log(Api);
      let add = [...arr,Api]
      setArr(add)
      setTaka(taka - Api.biddingPrice)
    }
    
    

    

  }
  

  return (
    <>
    <NavBar taka={taka}></NavBar>
    <LandingPage taka={taka} freeTaka={freeTaka} arr={arr}></LandingPage>
    <Players apiData={apiData} ChossBTN={ChossBTN} arr={arr} ys={ys} yes={yes}></Players>
    
     
    </>
  )
}

export default App

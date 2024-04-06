/* eslint-disable no-unused-vars */
// App.jsx
import  { useState } from 'react';
import {Header} from "./assets/asset.jsx"
import {BoxWrite} from "./assets/asset.jsx"
function App() {
    const [clicked,setClicked] = useState('')
    let list = []
    let isClicked = true
    const handleClicked = ()=>{
         setClicked((clicked)=>{
          list = []   
          list.push[clicked]
         })
    }
   return(
    <>
    <div className='  w-fit h-fit mx-auto mt-[20px]'>
      <Header isclick = {isClicked} /><button onClick={console.log('p')}>x</button >
      <BoxWrite/>
      

    </div>
    </>
   )
}

export default App;

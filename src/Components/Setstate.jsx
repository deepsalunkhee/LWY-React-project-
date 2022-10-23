import React from 'react'
import './Setstate.css'
import { useState } from 'react'

export const Setstate = () => {
    const[count,setCount]=useState(0)
  let  Increase=()=>{
     setCount(count+1)
}

  return (
    
    <div className='setstate'>
    <div className="left">
    <h4>6)setState </h4>
        <p>In the adjacent block of code I have use usestae hook to make a counter and  increament or decreament it ✌️ </p>
        
    </div>
    <div className="right">
    <p>{count}</p>
    <button onClick={Increase} className='button'>Increase</button>
    <button onClick={()=>setCount(count+-1)}  className='button'>Decrease</button>
    </div>
    </div>

  )
}

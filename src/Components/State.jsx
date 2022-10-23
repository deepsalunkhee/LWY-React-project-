import React from 'react'
import './State.css'
import { useState } from 'react'

export const State = () => {

    const[message,setMessage]=useState("Click to use state")
  return (
    <div className='state'>
    <div className="left">
    <h4>5)State </h4>
        <p>As Props are immutable we need some thing that can be changed to store the variable information and that is where state comes in the picture</p>
        <p>In the adjacent code block I have Made use of set state hook in most basic way possible</p>
    </div>
    <div className="right">
    <p>{message}</p>
    <button onClick={()=>setMessage("Great 👌")} className='button'>Click</button>
    </div>
    
</div>
  )
}



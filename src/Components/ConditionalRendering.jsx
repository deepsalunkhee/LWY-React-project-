import React, { useState } from 'react'
import '../Components/ConditionalRendering.css'

const ConditionalRendering = () => {

     const [condition1,setCondition1]=useState(true)
     const [condition2,setCondition2]=useState(true)

     let message
     if(condition1)
     message=<div>Which conditional rendering❓</div>
     else
     message=<div>If-else!!🙆🏽‍♂️</div>
     let message1

     condition2?
     message1=<div>Which conditional rendering❓</div>:
     message1=<div>Turnary!!🙆🏽‍♂️</div>



  return (
    <div className='conditional'>
    <div className="left">
    <h4>7)Conditional Rendering </h4>
        <p>Conditional statement are important part of any high level language in react too we can use these statement (using JS) </p>
        <p>In the adjacent block the first button renders the text using if else condition and second using ternury operator</p>
    </div>
    <div className="right">

        <button className='button' onClick={()=>setCondition1(!condition1)} >{message}</button>
        {/* using the turnary operator */}
        <button className='button' onClick={()=>setCondition2(!condition2)} >{message1}</button>

        
    
    </div>
    </div>
  )
}

export default ConditionalRendering

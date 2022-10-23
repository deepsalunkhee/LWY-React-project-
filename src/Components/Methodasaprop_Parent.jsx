import React from 'react'
import './Methodasaprop_Parent.css'
import MethodasapropChild from './Methodasaprop_Child'
import { useState } from 'react'

const Methodasaprop_Parent = () => {

    const [parent]=useState("Parent")

    let FunctInParent=()=>{

        alert(`Hello from ${parent}`)
    }
  return (
    <div className='state'>
    <div className="left">
    <h4>6)Function as a props </h4>
        <p>Using functions as a props we can  call a fuction in a component in which it is neither declared nor defined </p>
        <p>In the adjacent code block I have called a function written in parent component from the child component</p>
    </div>
    <div className="right">
    
      <MethodasapropChild  FunctInParent= {FunctInParent}/>
    </div>
    </div>
  )
}

export default Methodasaprop_Parent

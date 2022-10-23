import React from 'react'
import '../Components/Basicsprops.css'

export const Basicsprops = (props) => {
  return (
    <div className='props'>
    <div className="left">
    <h4>4)Props </h4>
        <p>Props are used when we need to pass some things to a function and then reuse it in side the function</p>
        <p>Props gives boost to the reuseability property of of the function</p>
    </div>
    <div className="right">
    <p>Hi!{props.name} using props 👋</p>
    </div>
    
</div>
  )
}

import React from 'react'
import './Methodasaprop_Child.css'

const Methodasaprop_Child = (props) => {
  return (
    <div >

        <button className='button'  onClick={props.FunctInParent}>Button in child component</button>
      
    </div>
  )
}

export default Methodasaprop_Child

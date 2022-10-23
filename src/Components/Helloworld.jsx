import React from 'react'
import '../Components/Helloworld.css'

export const Helloworld = () => {
  return (
    <div className='helloworld' 
    style={{
        color:"white",
        display:"grid",
        
        
        }}>

        <div className="left">
           <h4>1)Hello world</h4>
            <p>lets start the journey with the holy  chanting of "Helloworld!!!"</p>
            <p>Here I have done using simple JSX with help of header tag</p>
        </div>
        <div className="right">

            <h5>Hello world!!</h5>

        </div>
        
    </div>
  )
   
}

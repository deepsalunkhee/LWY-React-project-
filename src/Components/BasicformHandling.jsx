import React from 'react'
import { useState } from 'react'
import '../Components/BasicformHandling.css'



const BasicformHandling = () => {

    const [user,setUser]=useState('')
    const[comment,setComment]=useState('')
    const[skill,setSkill]=useState('')

    let Newuser=(event)=>{setUser(event.value)}
    let newcomment=(event)=>{setComment(event.comment)}
    let newskill=(event)=>{setSkill(event.skill)}
    let submitbro=(event)=>{alert(`${event.Newuser}${event.newcomment}${event.newskill}`) ; event.preventDefault()}
  return (
    <div className='form' >
    <div className="left">
    <h4>9)Form Handling</h4>
        <p>To take data form the user is one of the ,most commin task that we do as a webdeveloper so using form is one of the most common tool to do so  </p>
        <p>In the adjacent block  I have made an attempt to create a simple form and trying to print it as alert</p>
        <p>Note:Under construction 😶 </p>
    </div>
    <form className="right" onSubmit={submitbro}>
          <div >
            <label>Your Name    </label>
            <input type={'text'} style={{borderRadius:'25px',background:'yellow'}} value={user} onChange={Newuser}></input>
          </div>
          <div>
        <label>Comment</label>5
        <textarea style={{borderRadius:'25px',background:'yellow'}} value={comment} onChange={newcomment}  ></textarea>
           </div>

        <div  >
            <label>Topic</label>
            <select style={{borderRadius:'25px',background:'yellow'}} value={skill} onChange={newskill}>
                <option value="react">React</option>
                <option value="Java">Java</option>
                <option value="C++">C++</option>
            </select>
        </div>
        <button className='button'  type="submit">Submit</button>
        
       </form>
   
    </div>
  )
}

export default BasicformHandling

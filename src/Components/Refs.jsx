import React, { Component } from 'react'
import './Refs.css'

class Refs extends Component {

    constructor(props) {
      super(props)
      
      this.inputRef=React.createRef()
      
      }
      componentDidMount()
      {
        this.inputRef.current.focus()
      }
    
  render() {
    return (
        <div className='ref'>
        <div className="left">
        <h4>12)Use of Ref </h4>
            <p>Hi,if you are on this page for first time them you maybe woundering why are you not at the start of the page right?</p>
            <p>That is because I have made use of focs()  fuction which allow me to focus on the specific component  that user need to acces first when he/she visits my page for first time,this is usee full when we create components like login pages login pages </p>
            <h3> Please check out the remaining page too 😁</h3>
        </div>
        <div className="right">
            <React.Fragment>
               <input type='text' ref={this.inputRef} style={{backgroundColor:'orange'}}/>
            </React.Fragment>
    
        </div>
        </div>
    )
  }
}

export default Refs
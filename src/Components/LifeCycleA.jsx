import React, { Component } from 'react'
import '../Components/LifeCycleA.css'
 class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first:"Protocol",
      }
      console.log("Hi from the constructor")
     
    }

    static getDerivedStateFromProps(props,state)

    {
        console.log("Hi from the getDerivedStateFromProps ")
        return null;
    }

    componentDidMount()
    {
        console.log("Hi from the constructor")
    }
  render() {
    return (
        <div className='A'>
        <div className="l">
        <h4>A)Mounting </h4>
            <p>=>constructor(props) </p>
            <p>=> static getDerivedStateFromProps(props,stae)</p>
            <p>=>render()</p>
            <p>=>componentDidMount()</p> 
            
        </div>
        <div className="l">
        <h4>B)updatind </h4>
            <p>=>constructor(props) </p>
            <p>=> static getDerivedStateFromProps(props,stae) </p>
            <p>=>render()</p>
            <p>=>getSnapshotBeforeUpdates(prevProps,prevState) </p>
            <p>=>componentDidUpdate() </p>
            
        </div>
        <div className="l">
        <h4>C)Unmounting </h4>
            <p>=>componentDidUnm ount() </p>
            
        </div>
        <div className="l">
        <h4>D)Error Handling Phase Method </h4>
            <p>=>static getDerivedStateFromError(error) </p>
            <p>=>componentDidCatch(error,info) </p>
            
        </div>

        <p style={{color:"green"}}>Note:We will see how to use these method further </p>
       
        </div>
    )
  }
}

export default LifeCycleA

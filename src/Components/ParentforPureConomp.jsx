import React, { Component } from 'react'
import './ParentforPureConomp.css'
import PureComponent1 from './PureComponent1'

import Regularcomponent from './Regularcomponent'

 class ParentforPureConomp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Deep'
      }
    }

    componentDidCatch()
    {
        setInterval(()=>{ 
            this.setState({
                name:'Deep'
            })},200)
            console.log("1")
    }
    
  render() {
    return (
        <div className='conditional'>
        <div className="left">
        <h4>11)Pure Class component </h4>
            <p>Rendering is important if we what to display somethong using js but unwanted rendering may cause some lagy behaviour</p>
            <p>But using pure component we render some thing if there are changes in it as compared the its previous satate  this helps us in avoiding unwanted rendering </p>
        </div>
        <div className="right">
            <React.Fragment>
                <h3>From parnet component</h3>
                <PureComponent1 name={this.state.name}/>
                <Regularcomponent name={this.state.name}/>
            </React.Fragment>
    
        </div>
        </div>
    )
  }
}

export default ParentforPureConomp

import React, { Component } from 'react'
import '../Components/Basicclasscomponent.css'

export default class Basicclasscomponent extends Component {
  render() {
    return (
        <div className='Class'>
        <div className="left">
        <h4>3)class component </h4>
            <p>We can use any type of component as per our need,class component have to addtional fetures over the functional components </p>
            <p>The adjecent message is rendered using the class component</p>
        </div>
        <div className="right">
        <p>Using react Class component</p>
        </div>
        
    </div>
    )
  }
}

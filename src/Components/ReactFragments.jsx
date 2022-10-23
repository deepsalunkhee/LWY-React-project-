import React from 'react'
import '../Components/ReactFragments.css'

function ReactFragments() {
  return (
    <div className='conditional'>
    <div className="left">
    <h4>11)React fragment </h4>
        <p>We now that we can return a single element so if we whant to return multiple element we have to wrapp it in a single parent element but it creates an aditional object in dom</p>
        <p>So rather that doing do we can we "React.Fragment" tag as the parent element </p>
    </div>
    <div className="right">
        <React.Fragment>
            <h1>Hi using react fragments</h1>
        </React.Fragment>

    </div>
    </div>
  )
}

export default ReactFragments


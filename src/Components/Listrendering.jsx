import React from 'react'

import { List } from '../Components/List'
import '../Components/Listrendering.css'

export const Listrendering = () => {

    const person=[

       {
         roll:21100014,
        Name:'Deep',
        knows:'React'

       },

       {
        roll:211020003,
         Name:'Omkar',
        knows:'Java,c++,react'
       },
       {
        roll:211020021,
         Name:'Prathamesh',
        knows:'Jivan ka satya'
       }
    ]

    const personList=person.map(person=><List person={person}/> )
    return (
        <div className='conditional'>
        <div className="left">
        <h4>8)List rendering</h4>
            <p>List are important part of our daily life so it is essential to know how to include them react but at the same time it is important not to repaeat same block of code and it can be used using map   </p>
            <p>In the adjacent block the the three points are rendered using map  here a I have made use of id as well so that if we want make changes in the list then js can just update it rather than rercreating it</p>
            <p>Note:I am Deeply not sorry for using your names without concern omkar and prathamesh 😶‍🌫️</p>
        </div>
        <div className="right">
    
            
     {personList}
            
        
        </div>
        </div>
      )
}

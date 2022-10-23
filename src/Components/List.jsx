import React from 'react'

export const List = ({person}) => {
  return (
    <div>
        <li key={person.roll}>{person.roll} belong to {person.Name} and he knows {person.knows}</li>
    </div>
  )
}

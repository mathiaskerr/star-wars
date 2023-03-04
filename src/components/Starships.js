import React from 'react'

const Starships = ({starships}) => {
  
  
    const starshipNodes = starships.results.map((starship, index) => {
    return <li key={index}>{starship.name}</li>
 })
  
  

  

  return (
    <div>
    <h2>Starships</h2>
        <ul>
        
          {starshipNodes}
          
        </ul>    
    </div>
  )
}

export default Starships;
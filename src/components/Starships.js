import React from 'react'

const Starships = ({starships, getStarships}) => {
  
  
    const starshipNodes = starships.results.map((starship, index) => {
    return <li key={index}>{starship.name}</li>
 })
  
  

  const handleClick = () => {
    getStarships(starships.next)
  }

  const handleClickPrevious=() => {
    getStarships(starships.previous)
  }

  return (
    <div>
    <h2>Starships</h2>
      <span><button onClick={handleClickPrevious}>Previous Page</button><button onClick={handleClick}>Next Page</button></span>
        <ul>
        
          {starshipNodes}
          
        </ul>    
    </div>
  )
}

export default Starships;
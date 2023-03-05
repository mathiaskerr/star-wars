import React from 'react'
import Search from './Search'

const Starships = ({starships, getStarships, searchBar, filterData}) => {
  
  

  let starshipNodes;
 
  if (filterData.length === 0){
    starshipNodes = starships.results.map((starship, index) => {
    return <li key={index}>{starship.name}</li>
 })}
 else{
   starshipNodes = filterData.map((starship, index) => {
    return <li key={index}>{starship.name}</li>

   })}


  const handleClick = () => {
    if(starships.next){
    return getStarships(starships.next)}
  }

  const handleClickPrevious=() => {
    if(starships.previous){
    return getStarships(starships.previous)}
  }

  return (
    <div>
    <h2>Starships</h2>
    <Search searchBar={searchBar}/>
      <span><button onClick={handleClickPrevious}>Previous Page</button>  <button onClick={handleClick}>Next Page</button></span>
        <ul>
        
          {starshipNodes}
          
        </ul>    
    </div>
  )
}

export default Starships;
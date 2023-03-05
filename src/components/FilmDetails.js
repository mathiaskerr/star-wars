import React from 'react';


const FilmDetails = ({film, characters}) => {

  const characterNodes = characters.map((character, index) => {
    return <li key={index}> {character.name} </li>
  })
  return (
    <div className="details">
    
     {film.title}<br/>
     {film.release_date}<br/>
     {film.director}<br/>
     {film.producer}<br/>
     Episode: {film.episode_id}
     <ul>
      {characterNodes}
     </ul>

    </div>
  )
}

export default FilmDetails;
import React from 'react';
import {Link} from "react-router-dom";

const FilmDetails = ({film, characters}) => {

  const characterNodes = characters.map((character, index) => {
    return <li key={index}> {character.name} </li>
  })
  return (
    <div>
    
     {film.title}<br/>
     {film.release_date}<br/>
     {film.director}<br/>
     {film.producer}<br/>
     <ul>
      {characterNodes}

     <li>
     {/* <Link to="/">Starships</Link> */}
     </li>
     </ul>

    </div>
  )
}

export default FilmDetails;
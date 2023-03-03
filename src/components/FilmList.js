import React from 'react';
import Film from './Film';
import FilmDetails from './FilmDetails';

const FilmList = ({films, onFilmClick}) => {

  const filmNodes = films.map((film,index) => {
    return <Film key={index} film={film} onFilmClick={onFilmClick}/>
  })
  return (
    <div>
    
   
    <p>Film List</p>
    <ul>
       {filmNodes}
    </ul>
    </div>

  )
}

export default FilmList
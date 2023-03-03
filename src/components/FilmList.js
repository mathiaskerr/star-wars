import React from 'react';
import Film from './Film';
import FilmDetails from './FilmDetails';

const FilmList = ({films, onFilmClick}) => {

  const filmNodes = films.map((film) => {
    // filmNodes.sort()
    return <Film key={film.episode_id} film={film} onFilmClick={onFilmClick}/>
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
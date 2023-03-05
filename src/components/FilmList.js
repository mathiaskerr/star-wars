import React from 'react';
import Film from './Film';


const FilmList = ({films, onFilmClick}) => {

  const filmNodes = films.map((film) => {

    return <Film key={film.episode_id} film={film} onFilmClick={onFilmClick}/>
  })
  return (
    <div>
    
   

    <ul>
       {filmNodes}
    </ul>
    </div>

  )
}

export default FilmList
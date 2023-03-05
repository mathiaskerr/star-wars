import React from 'react';
import Film from './Film';
import "./FilmList.css";

const FilmList = ({films, onFilmClick}) => {

  const filmNodes = films.map((film) => {

    return <Film key={film.episode_id} film={film} onFilmClick={onFilmClick}/>
  })
  return (
    <div>
    
   

    <ul className="filmNodes">
       {filmNodes}
    </ul>
    </div>

  )
}

export default FilmList
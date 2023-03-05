import React from 'react';
import "./FilmList.css"


const Film = ({film, onFilmClick}) => {
  const handleClick = () => {
    onFilmClick(film)
  };




  return (
    <div >
    <a onClick={handleClick}>
      <li className="film">
        {film.title} <br/>
        {film.release_date}<br/>
     
      </li>
      </a>
    </div>
  )
}

export default Film;
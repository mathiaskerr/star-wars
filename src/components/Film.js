import React from 'react';



const Film = ({film, onFilmClick}) => {
  const handleClick = () => {
    onFilmClick(film)
  };

  return (
    <div>
      <li className="film">
        {film.title}<br/>
        {film.release_date}<br/>
        <button onClick={handleClick}>More Details</button>
      </li>
    </div>
  )
}

export default Film;
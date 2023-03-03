import React from 'react';

const FilmDetails = ({film}) => {
  return (
    <div>
    
     {film.title}<br/>
     {film.release_date}<br/>
     {film.director}<br/>
     {film.producer}<br/>

    

    </div>
  )
}

export default FilmDetails;
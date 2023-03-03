import React, {useState, useEffect} from 'react';
import FilmList from '../components/FilmList';
import FilmDetails from '../components/FilmDetails';

const MainContainer = () => {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState([]);

  useEffect(() => {
    getFilms()
  },[])

  const getFilms =() => {
    fetch('https://swapi.dev/api/films/')
    .then(res => res.json())
    .then(data => setFilms(data.results))
  }

  const onFilmClick=(film) => {
    setSelectedFilm(film);
    window.scroll(0, 0);
  };

  return (
    <div>
    <p>main</p> 
    <FilmDetails film={selectedFilm}/>
    <FilmList films={films} onFilmClick={onFilmClick}/>
    
    </div>
  )
}

export default MainContainer;
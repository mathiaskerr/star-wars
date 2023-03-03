import React, {useState, useEffect} from 'react';
import FilmList from '../components/FilmList';
import FilmDetails from '../components/FilmDetails';

const MainContainer = () => {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState([]);
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getFilms()
  },[])

  const getFilms =() => {
    fetch('https://swapi.dev/api/films/')
    .then(res => res.json())
    .then(data => setFilms(data.results))
  }

  const onFilmClick=(film) => {
    const characterPromises = film.characters.map((character) => {
        return fetch(character)
        .then(res => res.json())      
    })
    Promise.all(characterPromises)
    .then((data) => {
      setCharacters(data)
      setSelectedFilm(film);
    })

   
    window.scroll(0, 0);
  };

  return (
    <div>
    
    <FilmDetails film={selectedFilm} characters={characters}/>
    <FilmList films={films} onFilmClick={onFilmClick}/>
    
    </div>
  )
}

export default MainContainer;
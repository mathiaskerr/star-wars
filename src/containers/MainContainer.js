import React, {useState, useEffect} from 'react';
import FilmList from '../components/FilmList';
import FilmDetails from '../components/FilmDetails';
import Starships from '../components/Starships';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import NavBar from '../components/NavBar';




const MainContainer = () => {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [starships, setStarships] = useState(null);
  



    useEffect(() => {
      getFilms()
      getStarships("https://swapi.dev/api/starships/")
  
      
    },[])


  const getStarships = (Url) => {
    return fetch(Url)
    .then(res => res.json())
    .then(data => setStarships(data))
    }
    


  const getFilms =() => {
    fetch('https://swapi.dev/api/films/')
    .then(res => res.json())
    .then(data => setFilms(data.results.sort((a,b) => a.episode_id - b.episode_id)))

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

   
    <Router>
     <NavBar/>
      <Routes>
      {/* <Route path="/" element={<MainContainer />}/> */}
        <Route path="/starships" element={<Starships starships={starships} getStarships={getStarships}/>}/>
      </Routes>
     </Router>
      <FilmDetails film={selectedFilm} characters={characters}/>
          <FilmList films={films} onFilmClick={onFilmClick}/>
    {/* {starships ? <Starships starships={starships} getStarships={getStarships}/> : null}  */}
    </div>
   
  )
}

export default MainContainer;
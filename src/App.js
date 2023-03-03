import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import MainContainer from './containers/MainContainer';
import Starships from './components/Starships';
import FilmDetails from './components/FilmDetails';



function App() {
  return (
    <div>
    <h1>Star Wars</h1>
     <MainContainer/>
     <Router>
      <Routes>
        <Route path="/" element={<Starships/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;

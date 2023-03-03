import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import MainContainer from './containers/MainContainer';



function App() {
  return (
    <div>
    <h1>Star Wars</h1>
     <MainContainer/>
    </div>
  );
}

export default App;

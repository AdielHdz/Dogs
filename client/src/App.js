import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import DogDetail from "./components/DogDetail/DogDetail";
import AddNewDog from './components/AddNewDog/AddNewDog';
function App() {

  const { pathname } = useLocation();

  return (
    <div className="App">
      { pathname !== "/" ? ( <Nav /> ) : ( <></> ) } 
      <Routes>
        
        <Route path="/" element={<LandingPage />}/>
        <Route path="/home" element={ <Home /> } />
        <Route path="/detailDog/:id" element={< DogDetail />} />
        <Route path="/newDog" element={<AddNewDog />} />
      </Routes>
    </div>
  );
}

export default App;

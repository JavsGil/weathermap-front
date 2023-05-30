import React,{useState} from 'react';
import { BrowserRouter, Routes, Route,useNavigate } from 'react-router-dom';
import Map from './components/Map';
import Historic from "./components/Historic";
import './App.css';


const App = () => {

  const [historial, setHistorialData] = useState([]);
 
  return (
    <BrowserRouter>
      <div className="app-container">
    <header className="App-header">
        <h1>OpenWeather/LeafLet</h1>
    </header>
        <Routes>
          <Route path="/"  element={<Map setHistorialData={setHistorialData} useNavigate={useNavigate} />} />
          <Route path="/historic" element={<Historic  historial={historial} />} />
        </Routes>
      </div>
      
    </BrowserRouter>
  );
};

export default App;
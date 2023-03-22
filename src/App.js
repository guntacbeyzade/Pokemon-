import axios from 'axios';
import { useState, useEffect } from 'react';
import Main from './components/Main';
//import './components/style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonDetail from './components/PokemonDetail';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path='/pokemon-detail/:id' element={<PokemonDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

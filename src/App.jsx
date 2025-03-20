import { useState } from 'react'
import './App.css'
import axios from "axios";
import { useEffect } from 'react';
import Score from './Components/Score';
import Cards from './Components/Cards';
import ScoreComponent from './Components/ScoreComponent';

function App() {

  
  return (
    <>
    {/* <Score bestscore={bestscore}  score={score} setScore={setScore}/> */}

    <Cards/>   
    {/* <ScoreComponent /> */}
    </>
  )
}

export default App

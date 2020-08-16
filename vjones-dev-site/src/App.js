import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import May from './Components/May';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing id="landing"/>
      <May id="may"/>
    </div>
  );
}

export default App;

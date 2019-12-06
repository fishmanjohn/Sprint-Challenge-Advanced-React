import React from 'react';
import PlayerList from './components/PlayerList'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='playerList'>
      <PlayerList/>
      </div>
    </div>
  );
}

export default App;

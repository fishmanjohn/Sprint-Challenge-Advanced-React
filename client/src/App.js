import React from 'react';
import PlayerList from './components/PlayerList'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Soccer Players</h1>
      <div className='playerList'>
      <PlayerList/>
      </div>
    </div>
  );
}

export default App;

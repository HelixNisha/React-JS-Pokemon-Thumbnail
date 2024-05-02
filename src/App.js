
import './App.css';
import React from 'react';
import PokemonThumbnail from './components/PokemonThumbnail';
import Description from './components/Description';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>POKEMON APP</h1>

      </header>
      <PokemonThumbnail/>
      <Description/>
    </div>
  );
}

export default App;

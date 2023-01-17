import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/App.css';

import Main from './Main';

function App() {
  const [pokemons, setPokemons] = useState([]);
  // const [active, setActive] = useState('card')
  // const [pokeDex, setPokeDex] = useState();

  // getPokemon(res.data.results)

  useEffect(() => {
    axios.get('https://pokebuildapi.fr/api/v1/pokemon')
      .then(res => {
        console.log(res)
        setPokemons(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <Main pokemons = {pokemons}/>
  );
}

export default App;

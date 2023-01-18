import "../styles/Topbar.css";
import { useState } from "react";
import axios from "axios";

function Topbar() {

  const [data, setData] = useState({})
  const [name, setPokemonName] = useState('')

  const url = `https://pokebuildapi.fr/api/v1/pokemon/${name}`

  const searchPokemon = (event) => {
    if (event.key === 'Enter') {

      axios.get(url)
        .then((response) => {
          setData(response.data)
          console.log("res DATA   ", response.data);
        })
      setPokemonName('')
    }
  }

  return (
    <>
      <div className="topbar">
        <h1>Pokédex</h1>
        <input
          value={name}
          onChange={event => setPokemonName(event.target.value)}
          type="texte"
          placeholder="Pokémon"
          onKeyPress={searchPokemon}
        />
      </div>
      <div className="seen_search">
        { data.id ? <h1>N°{data.id} {data.name}</h1> : null}
        {data.id ? <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
          alt="visuel search" /> : null}
        {/* <div className="search_abilitées">
        { data.apiTypes.name ?  <h2>{data.apiTypes.name}</h2> : null }
      </div> */}
        {/* {
          data.apiTypes.map(search => {
            return (
              <div className="search_abilitées">
                <h2>{search.name} </h2>
              </div>
            )
          })
        } */}

      </div>
    </>
  )
}

export default Topbar
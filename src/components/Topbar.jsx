import "../styles/Topbar.css";
// import { useState } from "react";
// import axios from "axios";

function Topbar() {


                                        // {/* INPUT SEARCH */}

  // const [data, setData] = useState({})
  // const [name, setPokemonName] = useState('')

  // const url = `https://pokebuildapi.fr/api/v1/pokemon/${name}`

  // const searchPokemon = (event) => {
  //   if (event.key === 'Enter') {

  //     axios.get(url)
  //       .then((response) => {
  //         setData(response.data)
  //         console.log("res DATA   ", response.data);
  //       })
  //     setPokemonName('')
  //   }
  // }

                                        // {/* INPUT SEARCH */}

  return (
    <>
      <div className="topbar">
        <h1>Pokédex</h1>

                                      {/* INPUT SEARCH */}

        {/* <input
          value={name}
          onChange={event => setPokemonName(event.target.value)}
          type="texte"
          placeholder="Pokémon"
          onKeyPress={searchPokemon}
        />
      </div>
      {data.id ? <div className="seen_search">

        <h1>N°{data.id} {data.name}</h1>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
          alt="visuel search" /> */}

                                                {/* INPUT SEARCH */}



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
      
      
                                            {/* INPUT SEARCH
      : null}
                                            INPUT SEARCH */}
    </>
  )
}

export default Topbar
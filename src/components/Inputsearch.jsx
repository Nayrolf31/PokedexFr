import React, { useState } from "react";
import axios from "axios";

import "../styles/Inputsearch.css"
import "../styles/Pokeinfo.css"


function Inputsearch({ pokemons }) {
    const [data, setData] = useState({})
    const [pokesearch, setPokesearch] = useState('')

    const url = `https://pokebuildapi.fr/api/v1/pokemon/${pokesearch}`

    const searchPokemon = (event) => {
        if (event.key === 'Enter') {

            axios.get(url).then((response) => {
                setData(response.data)
                console.log("res DATA   ", response.data);
            })
            setPokesearch('')
        }
    }

    return (
        <div className="search-container">
            <div className="search">
                <input
                    className="input-search"
                    list="Pokémon-name"
                    value={pokesearch}
                    onChange={event => setPokesearch(event.target.value)}
                    onKeyPress={searchPokemon}
                    placeholder='Entrez un nom de Pokémon'
                    type="text" />

                <datalist id="Pokémon-name">
                    {pokemons.map((poke) =>
                        <option value={poke.name} />
                    )}
                </datalist>
            </div>
            { data.id ?  <div className="search-seen">
                {
                    // (!data) ? "" : (
                        <>
                            <h1 className="title_pokeseen" style={{ fontSize: "1.5rem" }}>N°{data.id} {data.name}</h1>
                            <img className="caught_pokeseen" style={{ width: "70px" }} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
                                alt="vue pokémon Recherche" /> 
                        </>
                    // )
                }
            </div> : null}


        </div>
    );
}


export default Inputsearch
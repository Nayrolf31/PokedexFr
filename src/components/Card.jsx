import React from "react"
import "../styles/Card.css"

const Card = ({ pokemons, infoPokemon }) => {
    // console.log(pokemons);
    return (
        <div className="left">
                    {pokemons.map((poke) =>
                        <div className='list'>
                            <div className='card__list' key={poke.id} onClick={()=>infoPokemon(poke)}>
                                <img src={poke.image} alt="visuel pokémon" />
                                <h2>N°{poke.id}</h2>
                                <h2 className="card_name">{poke.name}</h2>
                            </div>
                        </div>
                    )}
                </div>
    )
}

export default Card
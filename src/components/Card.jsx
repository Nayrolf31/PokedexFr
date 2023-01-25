import React from "react"
import "../styles/Card.css"

const Card = ({ pokemons, infoPokemon, seenPokemon }) => {
    // console.log(pokemons);
    return (
        <>
            {pokemons.map((poke) =>
                <>
                    <div className='card__list' key={poke.id} onClick={() => infoPokemon(poke)} onMouseOver={() => seenPokemon(poke)}>
                        <img src={poke.image} alt="visuel pokémon" />
                        <h2>N°{poke.id}</h2>
                        <h2 className="card_name">{poke.name}</h2>
                    </div>
                </>
            )}
        </>
    )
}

export default Card
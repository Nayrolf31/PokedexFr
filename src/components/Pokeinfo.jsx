import "../styles/Pokeinfo.css"

function Pokeinfo({ data }) {
  return (
    <>
      {
        (!data) ? "" : (
          <>
            {/* <h1 className="title_seen">N°{data.id} {data.name}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
              alt="vue pokémon cliqué" />
            <div className="abilitées" >
              {
                data.apiTypes.map(genre => {
                  return (
                    <h2>{genre.name} </h2>
                  )
                })
              }
            </div>
            <div className="base-stat">
            {
                data.stats.map(stat => {
                  return (
                    <h2> { stat } </h2>
                  )
                })
              }
            </div> */}

            <h1 className="title_seen">N°{data.id} {data.name}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
              alt="vue pokémon cliqué" />
            <div className="abilitées" >
            {
                data.apiTypes.map(genre => {
                  return (
                    <h2>{genre.name} </h2>
                  )
                })
              }
            </div>
            <div className="base-stat">
              <h2>HP : {data.stats.HP} </h2>
              <h2>Attaque : {data.stats.attack} </h2>
              <h2>Défense : {data.stats.defense} </h2>
              <h2>Attaque Spé : {data.stats.special_attack} </h2>
              <h2>Défense Spé : {data.stats.special_defense} </h2>
              <h2>Vitesse : {data.stats.speed} </h2>
            </div>
          </>
        )
      }
    </>
  )
}

export default Pokeinfo
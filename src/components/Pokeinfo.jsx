import "../styles/Pokeinfo.css"

function Pokeinfo({ data }) {
  return (
    <>
      {
        (!data) ? "" : (
          <>
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
            {/* <div className="base-stat">
            {
                data.stats.map(stat => {
                  return (
                    <h2> { stat.HP } </h2>
                  )
                })
              }
            </div> */}
          </>
        )
      }
    </>
  )
}

export default Pokeinfo
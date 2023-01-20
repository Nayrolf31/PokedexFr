

function Pokeseen({ data }) {
    console.log(" DATA pokeseen", data);
  return (
    <>
    {
      (!data) ? "" : (
        <>
          <h1 className="title_pokeseen">N°{data.id} {data.name}</h1>
          <img className="caught_pokeseen" style={{width : "80px" }} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
            alt="vue pokémon survolé" />
          {/* <div className="abilitées" >
            {
              data.apiTypes.map(genre => {
                return (
                  <h2>{genre.name} </h2>
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

export default Pokeseen


function Pokeseen({ data }) {
    // console.log(" DATA pokeseen", data);
  return (
    <>
    {
      (!data) ? "" : (
        <>
          <h1 className="title_pokeseen" style={{fontSize : "1.5rem" }}>N°{data.id} {data.name}</h1>
          <img className="caught_pokeseen" style={{width : "70px" }} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
            alt="vue pokémon survolé" />
        </>
      )
    }
  </>
)
}

export default Pokeseen
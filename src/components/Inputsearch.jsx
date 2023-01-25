

function Inputsearch({ pokemons }) {
    console.log(pokemons);
    return (
        <>
            <input
            list="Pokémon-name"
                placeholder="Nom Pokémon"
                id="Pokémon-name"
            />

            {pokemons.map((poke) =>
                <datalist id="Pokémon-name">
                    <option value={poke.name} />
                </datalist>
            )}
        </>
    )
}

export default Inputsearch
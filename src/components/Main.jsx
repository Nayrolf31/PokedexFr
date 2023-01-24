import "../styles/Main.css";

import { useState } from "react";

import Pokeinfo from "./Pokeinfo";
import Card from "./Card";
import Topbar from "./Topbar";
import Pokeseen from "./Pokeseen";
// import Inputsearch from "./Inputsearch";

function Main({ pokemons }) {

    const [pokeDex, setPokeDex] = useState();
    const [seenDex, setseenDex] = useState();
    return (
        <>
            <Topbar />

            <div className="container">
                <div className="left-content">
                    <Card pokemons={pokemons} infoPokemon={poke => setPokeDex(poke)} seenPokemon={poke => setseenDex(poke)} />
                </div>
                {/* <div className="inputsearch">
                    <Inputsearch />
                </div> */}
                <div className="right-content">
                    <div className="pokeseen">
                        <Pokeseen data={seenDex} />
                    </div>
                    <div className="pokeinfo">
                        <Pokeinfo data={pokeDex} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
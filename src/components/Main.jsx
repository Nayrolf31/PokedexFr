import "../styles/Main.css";

import { useState } from "react";

import Pokeinfo from "./Pokeinfo";
import Card from "./Card";
import Topbar from "./Topbar";

function Main({ pokemons }) {
    
    const [pokeDex, setPokeDex] = useState();
    return (
        <>
            <Topbar />
        
            <div className="container">
                <div className="left-content">
                    <Card pokemons={pokemons} infoPokemon={poke => setPokeDex(poke)} />
                </div>
                <div className="seen">
                    <Pokeinfo data={pokeDex}/>
                </div>
            </div>
        </>
    )
}

export default Main
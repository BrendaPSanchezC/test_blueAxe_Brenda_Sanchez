import { useState } from "react";
import { getPokemonName } from "../api/pokemonApi";

const Searchbar = ()=>{
    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState(null);


const handleSearch = async () => {
  if (search.trim() === "") {
    alert("Ingresa un nombre para buscar");
    return;
  }

  try {
    const res = await getPokemonName(search);
    setPokemon(res.data);
  } catch {
    alert("Pokémon no encontrado");
    setPokemon(null);
  }
};

return (
        <>
             <div className="search">
                <input
                placeholder="Buscar Pokémon"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={handleSearch}>Buscar</button>
            </div>

            {pokemon && (
                <div className="card" style={{ margin: "auto", width: "200px" }}>
                <img src={pokemon.sprites.front_default} />
                <h4>{pokemon.name.toUpperCase()}</h4>
                </div>
            )}
        </>
    );
};

export default Searchbar;
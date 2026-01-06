import { useEffect, useState } from "react";
import axios from "axios";

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(url).then((res) => setPokemon(res.data));
  }, [url]);

  if (!pokemon) return null;

  return (
    <div className="card">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <h4>{pokemon.name.toUpperCase()}</h4>
    </div>
  );
};

export default PokemonCard;

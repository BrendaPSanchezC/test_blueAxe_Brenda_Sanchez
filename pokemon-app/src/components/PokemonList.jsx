import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../store/pokemonSlice";
import PokemonCard from "./pokemonCard";

const PokemonList = () => {
    const dispatch = useDispatch();
    const {list, offset, loading} = useSelector((state)=> state.pokemon);

    useEffect(()=> {
        dispatch(fetchPokemons(offset));
    }, [offset]);

    if  (loading) return <p>Cargando..</p>

    return(
        <div className="grid">
            {list.map((pokemon)=> (
                <PokemonCard key={pokemon.name} url={pokemon.url} />
            ))}
        </div>
    );
};

export default PokemonList;
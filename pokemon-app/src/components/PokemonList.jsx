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

    const pokemonsOrdered = [...list]; //se hace un array con la lista de los pokemones


    //ordenando la lista al compararlo por un valor que en este caso es el nombre
    pokemonsOrdered.sort(function(a,b) {
        if (a.name > b.name){return 1;}
        if (a.name < b.name) {return -1;}
        return 0;
    })

    return(
        <div className="grid">
            {pokemonsOrdered.map((pokemon)=> (
                <PokemonCard key={pokemon.name} url={pokemon.url} />
            ))}
        </div>
    );
};

export default PokemonList;
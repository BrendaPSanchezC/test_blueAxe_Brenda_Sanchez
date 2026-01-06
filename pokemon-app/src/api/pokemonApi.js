import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = (offset = 0, limit = 6) =>
    axios.get(`${API_URL}?offset=${offset}&limit=${limit}`);

export const getPokemonName = (name) =>
    axios.get(`${API_URL}/${name.toLowerCase()}`);

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons } from "../api/pokemonApi";

export const fetchPokemons = createAsyncThunk(
    "pokemon/fetchPokemons",
    async (offset) => {
        const response = await getPokemons(offset);
        return response.data.results;
    }
);

const pokemonSlice =createSlice({
    name: "pokemon",
    initialState: {
        list: [],
        offset: 0,
        loading: false,
    },
    reducers:{
        setOffset: (state, action)=> {
            state.offset = action.payload;
        },
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchPokemons.pending, (state)=>{
            state.loading = true;
        })
        .addCase(fetchPokemons.fulfilled, (state, action)=>{
            state.list = action.payload;
            state.loading = false;
        });
    },
});

export const {setOffset} =pokemonSlice.actions;
export default pokemonSlice.reducer;
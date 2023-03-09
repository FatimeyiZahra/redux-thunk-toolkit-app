import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allPokemon: [],
  isLoading: false,
  error: "",
};

export const fetchAllPokemon = createAsyncThunk(
  "pokemon/fetchAllPokemon",
  async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const data = await res.data;
    return data;
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPokemon.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllPokemon.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allPokemon = action.payload;
    });
    builder.addCase(fetchAllPokemon.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const allPokemonSelector = (state) => state.pokemonSlice

export default pokemonSlice.reducer;

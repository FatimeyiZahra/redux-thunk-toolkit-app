import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store/store";

type Result = {
  name: string;
  url: string;
};

type Pokemon = {
  count: number;
  next: string;
  previous: null;
  results: Result[];
};

type stateType = {
  allPokemon: Pokemon;
  isLoading: boolean;
  error: string | undefined;
};

const initialState: stateType = {
  allPokemon: {} as Pokemon,
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

export const allPokemonSelector = (state:RootState) => state.pokemonSlice;

export default pokemonSlice.reducer;

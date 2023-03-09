import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "../feature/pokemon/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemonSlice,
  },
});

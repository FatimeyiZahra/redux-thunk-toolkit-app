import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "../feature/pokemon/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemonSlice: pokemonSlice,
  },

  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

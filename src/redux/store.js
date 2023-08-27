import { configureStore } from "@reduxjs/toolkit";
import { themesReducer } from "../features/themes/themesSlice";

export const store = configureStore({
    reducer: {
        themes: themesReducer
    }
})
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentTheme: 'light'
}

const themesSlice = createSlice({
    name: 'themes',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.currentTheme = action.payload;
        }
    }
});

export const themesReducer = themesSlice.reducer;
export const { changeTheme } = themesSlice.actions;
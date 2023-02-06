import { createSlice } from "@reduxjs/toolkit";

export const gifsSlice = createSlice({
    name: "gifs",
    initialState: {
        trending: [],

    },
    reducers: {
        setTrending: (state, action) => {
            state.trending = action.payload;
        }
    }
})

export const { setTrending } = gifsSlice.actions;

export default gifsSlice.reducer;
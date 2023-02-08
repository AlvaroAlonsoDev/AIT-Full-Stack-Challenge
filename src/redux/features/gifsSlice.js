import { createSlice } from "@reduxjs/toolkit";

export const gifsSlice = createSlice({
    name: "gifs",
    initialState: {
        comunity: [],
        trending: [],
        search: [],

    },
    reducers: {
        setTrending: (state, action) => {
            state.trending = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setComunity: (state, action) => {
            state.comunity = action.payload;
        },
        setNewOwn: (state, action) => {
            state.comunity = [...state.comunity, action.payload];
        }
    }
})

export const {
    setTrending,
    setSearch,
    setComunity,
    setNewOwn
} = gifsSlice.actions;

export default gifsSlice.reducer;
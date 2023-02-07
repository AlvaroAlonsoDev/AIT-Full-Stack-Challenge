import { createSlice } from "@reduxjs/toolkit";

export const gifsSlice = createSlice({
    name: "gifs",
    initialState: {
        trending: [],
        search: [],
        
    },
    reducers: {
        setTrending: (state, action) => {
            state.trending = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        }
    }
})

export const { setTrending, setSearch } = gifsSlice.actions;

export default gifsSlice.reducer;
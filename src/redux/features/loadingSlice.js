import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        set: false
    },
    reducers: {
        setLoading: (state, action) => {
            state.set = action.payload;
        }
    }
})

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
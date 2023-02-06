import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userLogged: null,
    },
    reducers: {
        setUserLogged: (state, action) => {
            state.userLogged = action.payload;
        },
        setUserLogOut: (state) => {
            state.userLogged = null;
        }
    }
})

export const { 
    setUserLogged, 
    setUserLogOut
} = userSlice.actions;

export default userSlice.reducer;
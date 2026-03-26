import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        auth: false,
        user: {}
    },

    reducers: {
        initiallogin: (state, actions) => {
            state.auth = !state.auth;
            state.user = actions.payload;
            // console.log(state.user)
        },

        clearauth:(state) => {
            state.auth = false
            state.user = {}
            console.log("auth",state.auth)
        }
       
    }
})

export const { initiallogin,clearauth  } = authSlice.actions;
export default authSlice.reducer;
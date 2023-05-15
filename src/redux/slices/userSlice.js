import { createSlice } from "@reduxjs/toolkit";
import { LS_NAME, myInitialState } from "../initialState";

const userSlice = createSlice({
    name: 'user',
    initialState: myInitialState.user,
    reducers:{
        setUpUser: (_, action) => {
            return action.payload
        },
        cleanUser: ()=> {
            localStorage.removeItem(LS_NAME)
            return myInitialState.user
        }
    }
})

export const { setUpUser, cleanUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
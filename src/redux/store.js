import { configureStore } from "@reduxjs/toolkit";
import { getInitialState, LS_NAME } from "./initialState";
import { filterReducer } from "./slices/filterSlice";
import { userReducer } from "./slices/userSlice";

export const store = configureStore({
    reducer:{
      user: userReducer,
      filter: filterReducer
    },
    preloadedState: getInitialState()
})

store.subscribe(()=>{
    localStorage.setItem(LS_NAME, JSON.stringify(store.getState()))
})
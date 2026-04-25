import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users : []
}

export const userSlice = createSlice({
    name : "users",
    initialState,
    reducers : { 
        loadusers: (state, action) => {
            state.users = action.payload;
        }
    }
})



export const { loadusers } = userSlice.actions;

export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: null,
}

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        setUser:(state,action)=>{

            state.users = action.payload;

        },
        logoutUser : (state,action) =>{
            state.users = null;
        }
    }
})


export const {setUser, logoutUser} = userSlice.actions;

export default userSlice.reducer;
import {createSlice, current} from '@reduxjs/toolkit'

const initialState = {
    currentUser:null,
    error:null,
    isLoading:false,
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.isLoading=true;
        },
        signInSuccess:(state,action)=>{
            state.currentUser=action.payload;
            state.isLoading=false;
            state.error=null;
        },
        signInFailure:(state,action)=>{
            state.error=action.payload;
            state.isLoading=false;
        },
    },
});

export const {signInStart,signInSuccess,signInFailure} = userSlice.actions;
export default userSlice.reducer;
import {createSlice} from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'user', 
    initialState: [], 
    reducers: {
       //All these are micro-reducer functions 
       addUser(state, action){
        state.push(action.payload);
       }, 
       removeUser(state, action){
          state.splice(action.payload, 1);
       },
       clearUsers(state, action){
           state.length = 0;
       },
    },
   
}); 

export  {userSlice} ;
export const {addUser, removeUser, clearUsers} = userSlice.actions;
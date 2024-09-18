import { createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState= {
    user:null
}
  
  const staffSlice = createSlice({
    name: "staff",
    initialState,
    reducers: {
        logIn: (state,action)=> {
            state.user = action.payload
        },
        logOut: (state,action)=> {
            state.user = action.payload
        },
    },
  });
  
  export default staffSlice.reducer;
  export const {logIn,logOut} = staffSlice.actions
  
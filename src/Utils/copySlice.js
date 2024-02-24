import { createSlice } from "@reduxjs/toolkit";

const copySlice=createSlice({
    name: "copy",
    initialState:{
        textToCopy:null,
    },
    reducers:{
        CopyText:(state,action)=>{
            state.textToCopy= action.payload;
        }
    }
})

export const {CopyText}=copySlice.actions;
export default copySlice.reducer;
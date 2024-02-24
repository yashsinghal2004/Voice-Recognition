import { createSlice } from "@reduxjs/toolkit";

const copySlice=createSlice({
    name: "copy",
    initialState:{
        textToCopy:null,
    },
    reducers:{
        CopyText:(state,action)=>{
            textToCopy.state= action.payload;
        }
    }
})

export const {CopyText}=copySlice.actions;
export default copySlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
const dataSlice=createSlice({
    name:"dataS",
    initialState:{
        products:[
            {id:1,name:"Wood",price:300,stock:20},
            {id:2,name:"Metal",price:400,stock:30},
            {id:3,name:"Plastic",price:200,stock:40},
             ],
    },
    reducers:{
        addData:(state,action)=>{
            console.log("The Slice: ",action.payload);
            state.products.push(action.payload);
            // state.products=[...products,action];
        },
        removeData:(state,action)=>{
    
            state.products=state.products.filter(item=>item.id!==action.payload)
        }
    }
})

export const{addData,removeData}=dataSlice.actions;
export default dataSlice.reducer;
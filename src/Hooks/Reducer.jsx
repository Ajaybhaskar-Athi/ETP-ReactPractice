import React, { useReducer } from 'react'
const initialState={count:0,name:''};

const reducer=(state,action)=>{
    switch(action.type){
        case "increment":
            return {...state,count:state.count+1};
        case "decrement":
            return{...state,count:state.count-1};
        case "setName":
            return {...state,name:action.payload};
        case "reset":
        return {count:0,name:""};
    }
}

const Reducer = () => {
    const[state,dispatch]=useReducer(reducer,initialState);
    return (
    <div>
        <h1>The Reducer Component</h1>
        <p>Count: {state.count}</p>
        <p>Name:{state.name}</p>
        <button onClick={()=>dispatch({type:"increment"})} className='bg-green-500 px-3 py-2'>Increment</button> <br />
        <button onClick={()=>dispatch({type:"decrement"})} className='bg-red-500 px-3 py-2'>Decrement</button> <br /> <br />
        <button onClick={()=>dispatch({type:"reset"})} className='bg-red-800 px-3 py-2'>RESET</button> <br /> <br />
        <input className='border-slate-500 bg-slate-500' type="text" name='name' onChange={(e)=>dispatch({type:"setName",payload:e.target.value})} /> <br />

    </div>  
  )
}

export default Reducer

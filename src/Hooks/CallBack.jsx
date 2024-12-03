import { useCallback, useState } from "react";
const ChildComp=({increment})=>{
    console.log("Child Component Rendered.");
    return(
        <>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
         onClick={()=>{increment()}}>Increment Count</button>
        </>
    )
}

/*
Here in CBack(parent comp) we r not chnaging count state which is related to child but when we start writing text in input, the React will
definitely re renders the Child bcoz its a part of parent component. so whnever it re renders childComp it doesnot create the incrment function again,  
it just reuses the previous one. so when we click on the button it will call the previous.

-Use useCallback to memoize the increment function in the parent.
-Use React.memo in the child component to prevent re-renders unless the props change.

useCallback prevents the recreation of the increment function on every render,
 but doesn't stop the child component from re-rendering if the parent re-renders.

*/


const CBack=()=>{
    const [count,setCount]=useState(0);
    const[text,setText]=useState('');
    // const increment=()=>{
    //     setCount((old)=>old+1);
    // }
    const increment=useCallback(()=>{
        setCount((old)=>old+1);
    },[]); 
    return(
        <div className="flex flex-col  items-center  ">
        <h1 className="text-xl font-bold">This is Callback component</h1>

        <ChildComp increment={increment}/> <br />
        <input type="text" value={text} className="mt-4 p-2 border border-gray-400 rounded-md"
                    placeholder="Type something..."  onChange={(e) => setText(e.target.value)} /> <br />
        <p>Count: {count}</p>
        <p>Text: {text}</p>

        </div>
    )
}

export default CBack;

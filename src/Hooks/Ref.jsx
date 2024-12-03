import React, { useEffect, useRef, useState } from 'react'
//storing mutable values that do not require re-rendering.

const Ref = () => {
    const arr=useRef([1,2,3,4]);
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("Page Rendered");
    });
  
    const Add=()=>{
        console.log("The New Element Added Into The Array");
        arr.current.push(arr.current.length+1);
        console.log(arr.current);

    }
    const handleClick=()=>{
        setCount(count+1);
        console.log("The Count called ",count);
    }
  return (
    <div>
               <h1 className="text-xl font-bold">This is Ref component</h1>

      <button className='border bg-green-600 hover:bg-gradient-to-tr' onClick={Add}>Add New Element</button>
      <button className='border bg-red-600 hover:bg-gradient-to-tr' onClick={handleClick}>Increment Count</button>
        <ul class='list-disc pl-5'>
            {
                arr.current.map((ele,index)=>(
                    <li  key={index}>{ele}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Ref

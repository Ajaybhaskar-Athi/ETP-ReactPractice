import React, { useEffect, useMemo, useRef, useState } from 'react'

const Memo = () => {
            const[num,setNum]=useState(0);
            const[text,setText]=useState("he");

            const renderCount=useRef(0);
            const inpRef=useRef(null);

            renderCount.current++;

            useEffect(()=>{
                inpRef.current.focus();
            },[]);
            const fact=(num)=>{
                console.log("Computing Factorial....");
                let res=1;
                for(let i=2;i<=num;i++)res*=i;
                return res;
            }
            const factorial=useMemo(()=>fact(num),[num]);
  return (
    <div className="flex flex-col  items-center  ">
        <h1 className="text-xl font-bold">This is memo component</h1>

        <p>The Page Rendered {renderCount.current} Times</p>
        <button onClick={()=>{setNum(num+1)}} className='bg-blue-500 px-2 py-4 hover:bg-gradient-to-br rounded-md'>Increment Num</button>
        <p>Number: {num}</p>
        <p>The Factorial of Number is: {factorial}</p>
        <input ref={inpRef} type="text" value={text} placeholder=' Type Here...' onChange={(e)=>setText(e.target.value)} 
         className='border border-blue-700' />
        <p>Text: {text}</p>
    </div>
  )
}

export default Memo

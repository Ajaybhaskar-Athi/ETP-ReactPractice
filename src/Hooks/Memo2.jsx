import React, { useEffect, useMemo, useState } from 'react'

const Memo2 = () => {
   
    const [effect,setEffect]=useState(0);
    const [memo, setMemo] = useState(0);
    useEffect(()=>console.log("UseEffect Called",effect),[effect]);
    useMemo(()=>{console.log("UseMemo called",memo)},[memo]);

    const factorial=()=>{
        console.log("factorial Called"); //this is called evrytime when page renders even we dont want to calculate this again &again
        return 120;
    }
    const fact=useMemo(()=>{console.log(" factorial UseMemo called");return 720},[]);//called only at 1st render and whenver dependecy chnages if we have any such variables
  return (
    <div className='flex flex-col  items-center '>
        <h1 className="text-xl font-bold">This is memo2 component</h1>
        <p>The factorial of 5 is {factorial()} </p>
        <p>The factoiral of 6 is {fact}</p>
      <button className='py-1 px-1 bg-blue-500 mb-3' onClick={()=>{setEffect(effect+1)}}>Effect++</button>
      <button className='py-1 px-1 bg-blue-500' onClick={()=>{setMemo(memo+1)}}>Memo++</button>
    </div>
  )
}

export default Memo2

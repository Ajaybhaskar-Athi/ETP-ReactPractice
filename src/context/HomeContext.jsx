import React from 'react'
import { useState } from 'react';
import ContextProvider, { useAppContext } from './contextProvider.jsx'
import Table from './Table';
const initialinfo={
    name:'',
    id:null,
    dept:""
};
const Home = () => {
    const{data,setData}=useAppContext();
   
    const [info, setInfo] =useState(initialinfo);
    const handleClick=(e)=>{
        e.preventDefault();
        setData([...data,info]);
        setInfo(initialinfo);
    }
  return (
    <>
        <div>
            <h1>Enter The Details of Employee</h1>
        <form>
            <label htmlFor="id">Enter ID</label>    <br />
            <input className='border border-slate-500 bg-slate-300 rounded-md ' type="number" id="id" name="id" 
            onChange={(e)=>{setInfo({...info,id:e.target.value})}} value={info.id || ''} /> <br />
            <label htmlFor="name">Enter Name</label>    <br />
            <input type="text" name='name' onChange={(e)=>{setInfo({...info,name:e.target.value})}} value={info.name} /> <br />

            <label htmlFor="dept">Enter Department</label>    <br />
            <input type="text" name='dept' onChange={(e)=>{setInfo({...info,dept:e.target.value})}} value={info.dept}/> <br />
            <button type="submit" onClick={handleClick}>Submit</button>
        </form>    
        </div> 
        
        <Table/>
    
    </>
  )
}

const HomeContext=()=>{
    return(
        <ContextProvider>
            <Home/>
        </ContextProvider>
    )
}

export default HomeContext

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Hooks = () => {
  return (
    <div className='flex flex-col m-2 inline-block'>
      <Link to='/hooks/callback'
        className='text-xl text-white bg-gradient-to-r from-blue-500 to-teal-400 mb-2 py-1 px-3  rounded-md hover:from-teal-400 hover:to-blue-500 transition-all ease-in-out inline-block max-w-max'>
        Callback
        </Link>
        <Link to='/hooks/memo'
        className='text-xl text-white bg-gradient-to-r from-blue-500 to-teal-400 py-1 px-3 mb-2 rounded-md hover:from-teal-400 hover:to-blue-500 transition-all ease-in-out inline-block max-w-max'>
        Memo(Factorial)
        </Link>
        <Link to='/hooks/memo2'
        className='text-xl text-white bg-gradient-to-r from-blue-500 to-teal-400 py-1 px-3 mb-2 rounded-md hover:from-teal-400 hover:to-blue-500 transition-all ease-in-out inline-block max-w-max'>
       Memo2 
        </Link>
        <Link to='/hooks/rendercount'
        className='text-xl text-white bg-gradient-to-r from-blue-500 to-teal-400 py-1 px-3 mb-2 rounded-md hover:from-teal-400 hover:to-blue-500 transition-all ease-in-out inline-block max-w-max'>
        Render Count 
        </Link>
        <Link to='/hooks/ref'
        className='text-xl text-white bg-gradient-to-r from-blue-500 to-teal-400 py-1 px-3 mb-2 rounded-md hover:from-teal-400 hover:to-blue-500 transition-all ease-in-out inline-block max-w-max'>
        Ref 
        </Link>
        <Link to='/hooks/reducer'
        className='text-xl text-white bg-gradient-to-r from-blue-500 to-teal-400 py-1 px-3 mb-2 rounded-md hover:from-teal-400 hover:to-blue-500 transition-all ease-in-out inline-block max-w-max'>
        Reducer 
        </Link>
        <Link to='/hooks/useeffect'
        className='text-xl text-white bg-gradient-to-r from-blue-500 to-teal-400 py-1 px-3 mb-2 rounded-md hover:from-teal-400 hover:to-blue-500 transition-all ease-in-out inline-block max-w-max'>
        Use Effect  
        </Link>
        


      <Outlet />
    </div>
  );
};

export default Hooks;

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate=useNavigate();
  const   goToHooks=()=>{
    navigate('/hooks');
  }
  const goToBack=()=>{
    navigate(-1);
  }
  const goToDetails=()=>{
    navigate('/details/12?username=Ajay&password=1234');
  }
  return (
    <div className='w-full'>
      <nav className='flex flex-row p-3 bg-slate-500'>
      <Link to='/' className='text-xl mr-3'>Home  </Link>
        <Link to='/cart' className='text-xl mr-3'>Cart</Link>
        <Link to='/styling' className='text-xl mr-3'>Styling</Link>
        
        {/* <Link to='/hooks' className='text-xl'>Hooks</Link> */}
        <button className='text-xl mr-3' onClick={goToHooks}>Hooks</button>
        <button className='text-xl mr-3' onClick={goToBack}>Back</button>
        <button className='text-xl mr-3' onClick={goToDetails}>Params</button>

        <Link to='/HomeRedux' className='text-xl mr-3'>Redux</Link>


      </nav>
      <Outlet />
    </div>
  );
};

export default Header;

import React from 'react';
import { CiBoxList, CiPlane, CiFileOn, CiUser, CiForkAndKnife, CiWavePulse1, CiCoins1 } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <>
      <div className='absolute top-0 left-0 m-2 p-4 flex items-center text-center text-xl text-black w-1/6'>
        <CiForkAndKnife className='mr-2' />
       
       <Link to="/Bistro">

   <span>Bistro</span>
       </Link>
      </div>
      <div className='relative bg-gray-200 h-screen w-1/6 m-2 p-8 mt-16'>
        <div className='flex items-center text-black my-4'>
          <CiBoxList className='mr-2' />
          
          <Link to="/">
          
          <span>Dashboard</span>
          </Link>
        </div>
        <div className='flex items-center text-black my-4'>
          <CiPlane className='mr-2' />
        
        <Link to="/Orders">
        
          <span>Orders</span>
        </Link>
        </div>
        <div className='flex items-center text-black my-4'>
          <CiFileOn className='mr-2' />
        
        <Link to="/Menues">
        
          <span>Menues</span>
        </Link>
        </div>
        <div className='flex items-center text-black my-4'>
          <CiUser className='mr-2' />
          
          <Link to="/Customer">

          <span>Customer</span>
          </Link>
        </div>
        <div className='flex items-center text-black my-4'>
          <CiWavePulse1 className='mr-2' />
         
         <Link to="/Analytics">
         
          <span>Analytics</span>
         </Link>
        </div>
        <div className='flex items-center text-black my-4'>
          <CiCoins1 className='mr-2' />
          
          <Link to="/Table">
          <span>Table</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

import React from 'react';
import { CiBoxList, CiPlane, CiFileOn, CiUser, CiForkAndKnife, CiWavePulse1, CiCoins1 } from "react-icons/ci";

const Sidebar = () => {
  return (
    <>
      <div className='m-2 p-4 flex items-center text-center' style={{marginTop:"-80px"}}>
        <CiForkAndKnife className='mr-2' />
        <span>Bistro</span>
      </div>
      <div className='bg-slate-500 h-screen w-1/6 m-2 p-8 mt-10'>
        <div className='flex items-center text-white my-4'>
          <CiBoxList className='mr-2' />
          <span>Dashboard</span>
        </div>
        <div className='flex items-center text-white my-4'>
          <CiPlane className='mr-2' />
          <span>Orders</span>
        </div>
        <div className='flex items-center text-white my-4'>
          <CiFileOn className='mr-2' />
          <span>Menues</span>
        </div>
        <div className='flex items-center text-white my-4'>
          <CiUser className='mr-2' />
          <span>Customer</span>
        </div>
        <div className='flex items-center text-white my-4'>
          <CiWavePulse1 className='mr-2' />
          <span>Analytics</span>
        </div>
        <div className='flex items-center text-white my-4'>
          <CiCoins1 className='mr-2' />
          <span>Table</span>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

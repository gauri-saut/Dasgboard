import React from 'react';
import { CiBellOn, CiMail } from "react-icons/ci";
import { AiFillCodeSandboxCircle } from "react-icons/ai";

export const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-white shadow-md'>
      <div className='flex-1 flex justify-center'>
        <input 
          type="text" 
          placeholder='Search here' 
          className='w-1/2 p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400'
        />
      </div>
      <div className='flex items-center space-x-4'>
        <CiBellOn className='text-2xl cursor-pointer'/>
        <CiMail className='text-2xl cursor-pointer'/>
        <AiFillCodeSandboxCircle className='text-2xl cursor-pointer'/>
       
      </div>
    </div>  
  );
}

export default Header;



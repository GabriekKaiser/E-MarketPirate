import React, { useState } from 'react'
import {assets} from '../assets/assets'
import {Link, NavLink } from 'react-router-dom'
import {svg} from '../svg/svg'
function Navbar() {
  const [visible,setVisible] = useState(false);
  return (
    <div className='flex items-center justify-between py-6 font-medium'>
        <img src={assets.logo} className='w-24' alt="" />
        
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
          <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          <NavLink to='about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          <NavLink to='contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
        </ul>
        <div className='flex items-center gap-1'>
          <img src={svg.instagram} className='w-6 h-6 cursor-pointer' alt="Instagram Logo" />
        </div>

        <div className='flex items-center gap-5'>
          <img src={assets.search_icon} className='w-4 cursor-pointer ' alt="" />
          <div className='group relative'> 
            <img className='w-4 cursor-pointer' src={assets.profile_icon}  alt="" />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-blue-700'>My Profile</p>
                <p className='cursor-pointer hover:text-green-500'>Orders</p>
                <p className='cursor-pointer hover:text-red-500'>Logout</p>
              </div>
            </div>
          </div>
          <Link to='/cart' className='relative'>
              <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
              <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'></p>
          </Link>
          <img onClickC={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>

      {/*Sidebar Menu for small screens*/}

    </div>
  )
}

export default Navbar
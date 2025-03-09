"use client"
import {FaTrashAlt} from 'react-icons/fa'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
import MobileNav from './MobileNav'



const Nav = () => {
    const[openmenu,setOpenmenu]=useState(false)

    const Menu=()=>{
        setOpenmenu(!openmenu)
    }
  return (
    <div className="flex relative items-center justify-between px-4 md:px-8 lg:px-16 xl:px-32 2xl:64 h-20 w-full">
        <h1 className='font-bold text-3xl text-black'>LIS.TODOLIST</h1>
        <div className='hidden font-stretch-50% md:flex uppercase gap-4 items-center justify-between '>
            <a href='/' className='px-2'>Home</a>
            <a href='/' className='px-2'>Project</a>
            <a href='/' className='px-2'>About</a>
            <a href='/' className='px-2'>Contact us</a>
            
        </div>
        <div className='md:hidden cursor-pointer'>
            {!openmenu ? <AiOutlineMenu size={20} onClick={()=>Menu()}/> : <AiOutlineClose size={20} onClick={()=>Menu()}/>}
        </div>
        {openmenu && 
        <MobileNav
        openmenu={openmenu}
        setOpenmenu={setOpenmenu}
        Menu={Menu}/>
        }
       
        </div>
  )
}

export default Nav
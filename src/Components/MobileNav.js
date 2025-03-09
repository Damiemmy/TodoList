import React from 'react'
import Link from 'next/Link'
import { AiOutlineClose } from 'react-icons/ai'


const MobileNav = ({openmenu,setOpenmenu,Menu}) => {
  return (
    <div className='absolute flex flex-col items-center top-20  left-0 w-[60%] text-white bg-black justify-between p-4 gap-5 ease-in-out duration-500'>
        <AiOutlineClose size={20}  onClick={()=>Menu()} className='flex w-full justify-right items-right text-right'/>
        <a href='/' className='border-b border-b-gray-600 py-2 w-[50%] text-center'>Home</a>
        <a href='/' className='border-b border-b-gray-600 py-2 w-[50%] text-center'>Project</a>
        <a href='/' className='border-b border-b-gray-600 py-2 w-[50%] text-center'>About</a>
        <a href='/' className='w-[50%] text-center'>Contact</a>
    </div>
  )
}

export default MobileNav
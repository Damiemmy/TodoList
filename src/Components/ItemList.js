import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'


const ItemList = ({items,handleCheck,handleDelete}) => {
  return (
    <div>
        {items.map((item)=>(<ul key={item.id} className='text-lg md:text-xl text-center items-center my-2 flex flex-col max-w-[100%] justify-center'>
        
        <li className='bg-gray-400 rounded-md flex w-full p-2 items-center justify-between ' >
            <div className='flex items-center w-full gap-2'>
            <input type="checkbox" onChange={()=>handleCheck(item.id)} checked={item.checked} />
            <p className='' style={(item.checked)? {textDecoration:'line-through'}:null}>{item.name}</p>  
            </div> 
            <button onClick={()=>handleDelete(item.id)} className='text-red-600' > <FaTrashAlt/></button> 
        </li>
             
           
            
   
         
            </ul> ))}</div>
  )
}

export default ItemList
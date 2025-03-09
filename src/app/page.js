"use client"
import {FaPlus} from 'react-icons/fa'
import { useRef, useState } from 'react'  
import NumberItemList from '@/Components/NumberItemList'
import SearchItem from '@/Components/SearchItem'
import ItemList from '@/Components/ItemList'



const page = () => {
  const[newItem,setNewItem]=useState('')
  const[search,setSearch]=useState('')

  const[items,setItems]=useState(JSON.parse(localStorage.getItem('shoppinglist',)))
      const handleCheck=(id)=>{
        const listItem=items.map((item)=> item.id===id? {...item,checked: !item.checked}:item);
        setItems(listItem);
        localStorage.setItem('shoppinglist',JSON.stringify(listItem));
      

      }
      const handleDelete=(id)=>{
        const deleteitems=items.filter((item)=> item.id!==id)
        setItems(deleteitems);
        localStorage.setItem('shoppinglist',JSON.stringify(deleteitems));
      }
      const additems=(name)=>{
        const id= items.length ? items[items.length-1].id +1:1;
        const mynewitem={id,name,checked:false}
        const listitems=[...items,mynewitem];
        setItems(listitems);
        localStorage.setItem('shoppinglist',JSON.stringify(listitems))
      }
      const HandleSubmit=(e)=>{
        e.preventDefault();
        console.log(newItem);
        additems(newItem);
        if(!newItem) return;
        setNewItem('');

      }
      const inputRef=useRef();
  return (
 
    <div className="w-full p-4 justify-center h-[100%] bg-gray-200 items-center bg-grey mx-auto py-4">
        <div className=" flex flex-col max-w-[700px] mx-auto text-center items-center justify-center">
            <h1 className="font-bold text-xl md:text-3xl md:3xl py-3 rounded-md bg-black text-white w-full mt-1" >ToDoList</h1>
            <form id='' className='flex px-20 w-full justify-center gap-2 md:gap-4 items-center my-2' onSubmit={(e)=>HandleSubmit(e)}>
              <div className='rounded-md w-[70%] bg-white h-10 flex justify-center  text-center items-center'>
              <input type="text" placeholder='Add a List' 
              className='outline-none py-2 text-black flex-1 w-full p-2 bg-transparent'
              ref={inputRef}
              id='additem'
              value={newItem}
              onChange={(e)=>setNewItem(e.target.value)}
              autoFocus
              required
              />
              </div>
              
              <button type='submit' 
              aria-label='Add Item'
              onClick={()=>inputRef.current.focus()}
              className='cursor-pointer bg-black flex  text-white font-bold rounded-md justify-center items-center w-10 h-10'>
              <FaPlus size={15}  />
              </button>
             
            </form>
            <SearchItem
            search={search}
            setSearch={setSearch}/>
           

       
        <div className='bg-white w-[90%] mx-auto p-4 rounded-md shadow-md py-2'>
      
      {items.length ?( <div className='w-full'>
        <ItemList
        items={items.filter(item=>((item.name).toLowerCase()).includes(search.toLocaleLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
            </div>):<h1 className='py-10'>Empty List</h1>}   
         
        </div>
        
      
            </div>
            <NumberItemList length={items.length}/>
    
   
    </div>
  
  )
}

export default page
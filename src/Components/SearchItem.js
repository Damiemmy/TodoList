import React from 'react'


const SearchItem = ({search,setSearch}) => {
  return (
    <form className='my-2 flex items-center justify-center gap-2'>
       <button> <label htmlFor='searchitem'> Search</label></button>
        <input type='text' value={search}
        onChange={(e)=>setSearch(e.target.value)} className='bg-gray-100 p-2 rounded-md' placeholder='search for items' id='searchitem' role='searchbox'/>

    </form>
  )
}

export default SearchItem
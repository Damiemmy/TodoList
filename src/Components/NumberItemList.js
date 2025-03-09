import React from 'react'

const NumberItemList = ({length}) => {
  return (
    <div className='text-xl text-black  font-bold flex justify-center items-center'>{length} {length===1 ? 'item':'items'} in schedule</div>
  )
}

export default NumberItemList
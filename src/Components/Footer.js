"use client"


const Footer = () => {
    const today= new Date()
  return (
    
    <div className="bg-black  justify-center items-center text-center text-white w-full py-1">
        <h1>copywrite &copy; {today.getFullYear()}</h1>
      
    </div>
  )
}

export default Footer
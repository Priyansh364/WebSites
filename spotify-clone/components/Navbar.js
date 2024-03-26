import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky navbar z-1'>
      
      <div className=" flex opacity-95 justify-between ml-0  m-2 mt-0 pt-0 right">
        <div className="">
          <div className="flex px-7 pt-5 gap-3"> <img
                    className="w-5 invert hover:cursor-pointer"
                    src="/icons/left.svg"
                    alt="no img spotify  here"
                  />
                  <img
                    className="w-5 invert hover:cursor-pointer"
                    src="/icons/right.svg"
                    alt="no img spotify  here"
                  /> </div>

        </div>
        <div className="flex z-20 items-start gap-6 ">
          <button className="pt-6">Sign up</button>
          <button className="p-3 text-black px-7 mr-9 font-black rounded-full m-3 bg-slate-200">Log in</button>
        </div>
      </div>


      
    </div>
  )
}

export default Navbar

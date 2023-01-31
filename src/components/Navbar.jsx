import React from 'react'
import { FoodieeWoodiee, google , magnifying_glass } from '../assets'
import './navbar.css'

const Navbar = () => {
  return (
    <div className={`sm:py-4 py-3 flex justfiy-between items-center`}>
      <div className="flex flex-1 p-5 ml-8">
        <img src={FoodieeWoodiee} alt="logo" className={`ml-2 w-[200px] h-[30px] cursor-pointer `} />
      </div>
      <div className="mr-6 relative">
        <img src={magnifying_glass} alt="search" className="absolute top-2.5 left-2" />
          <input type="text" name="search" className="min-w-[360px] h-[40px] border-2 border-[#000000] rounded-[10px] pl-9 text-[18px] font-semibold" placeholder='Search'/>
      </div>
      <div className="flex flex-1.5 justify-around items-center px-6">
        <button className="w-[350px] h-[40px] rounded-[15px] p-2 bg-black text-white flex flex-row justify-center box-shadow"> <img src={google} alt="google" className="w-[20px] h-[20px] flex mt-1 mr-2 " /> Login/SignUp with google</button>
      </div>
    </div>
  )
}

export default Navbar
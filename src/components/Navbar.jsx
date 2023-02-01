import React, { useState } from 'react'
import { FoodieeWoodiee, google, magnifying_glass, menuOpen, menuClose } from '../assets'
import './navbar.css'
import navLinks from '../constants'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <div className={`sm:py-3 py-2 flex justfiy-around items-center sm:flex-row flex-col relative`}>
      <div className="flex flex-1 p-5 md:ml-8 sm:ml-5 ml-2">
        <img src={FoodieeWoodiee} alt="logo" className={`ml-2 h-[30px] cursor-pointer `} />
      </div>
      <div className="mr-8 relative">
        <img src={magnifying_glass} alt="search" className="absolute top-2.5 left-2" />
        <input type="text" name="search" className="md:min-w-[360px] w-[300px] h-[40px] bg-[#E1E1E1] rounded-[10px] pl-9 text-[18px] font-semibold " placeholder='Search' />
      </div>
      <div className="md:block hidden flex justify-around items-center px-6">
        <button className="min-w-[300px] h-[40px] rounded-[15px] p-2 bg-black text-white flex flex-row justify-center box-shadow text-[#FFF500]"> <img src={google} alt="google" className="w-[20px] h-[20px] flex mt-1 mr-2 " /> Login/SignUp with google</button>
      </div>

      {/* <div className="w-full">
        <img
          src={`${toggle ? menuClose : menuOpen}`}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={setToggle( (prev) => !prev )} />
      </div> */}

      <div className="md:hidden sm:flex absolute top-[50px] right-1 p-2 rounded-[8px] mr-6 justify-end items-center border-2 border-black ">
        <img
          src={toggle ? menuClose : menuOpen}
          alt="Menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-[#FFFFFF] absolute top-[128px] left-0 right-2 w-full border-2 border-black  rounded-[10px] justify-center items-center`}
        onClick={() => setToggle((prev) => !prev)}
      >
        <div className="flex flex-column justify-center items-center text-center">
          <ul className='list:none'>
            {
              navLinks.map((link, index) => (
                <NavLink to={`/${link.id}`}>
                  <li key={index} className={`${index !== navLinks.length - 1 ? 'my-5' : 'my-5'} 
                                             border-2 border-black p-3 w-[220px] text-center navLinks duration-300 
                                             rounded-[15px] bg-[#D9D9D9] text-[1.2rem] font-semibold`}

                    onClick={`active`}
                    activeClassName="active-class">
                    {link.title}
                  </li>
                </NavLink>
              ))

            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
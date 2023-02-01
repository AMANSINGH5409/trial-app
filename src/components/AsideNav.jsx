import React from 'react'
import navLinks from '../constants'
import { NavLink } from 'react-router-dom' ;

export const AsideNav = () => (
    <aside className="md:block hidden flex flex-column min-w-[300px] h-screen border-2 border-[#000000]">
        <div className="w-full flex flex-col justify-between items-center p-4">
            <ul className="list-style-none">

                {
                    navLinks.map((link, index) => (
                        <NavLink to={`/${link.id}`}>
                            <li key={index} className={`${ index !== navLinks.length-1 ? 'my-5' : 'my-0'} 
                             border-2 border-black p-3 w-[220px] text-center navLinks duration-300 
                             rounded-[15px] bg-[#D9D9D9] text-[1.2rem] font-semibold`} 
                             
                             onClick={`active`} 
                             activeClassName="active-class">
                                {link.title}
                            </li>
                        </NavLink>
                    ))
                }

                {/* <NavLink to="/home">
                    <li className={`my-5 border-2 border-black p-3 w-[220px] text-center navLinks duration-300 
                             rounded-[5px] bg-[#D9D9D9] text-[1.2rem] font-semibold`}

                        // onClick={`active`}
                        activeClassName="active-class">
                        Home
                    </li>
                </NavLink>

                <NavLink to="/myorders">
                    <li className={`my-5 border-2 border-black p-3 w-[220px] text-center navLinks duration-300 
                             rounded-[5px] bg-[#D9D9D9] text-[1.2rem] font-semibold`}

                        // onClick={`active`}
                        activeClassName="active-class">
                        My Orders
                    </li>
                </NavLink>

                <NavLink to="/myfavorites">
                    <li className={`my-5 border-2 border-black p-3 w-[220px] text-center navLinks duration-300 
                             rounded-[5px] bg-[#D9D9D9] text-[1.2rem] font-semibold`}

                        // onClick={`active`}
                        activeClassName="active-class">
                        My Favorites
                    </li>
                </NavLink> */}
            </ul>
        </div>
    </aside>
)

export default AsideNav;
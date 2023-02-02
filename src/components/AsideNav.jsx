import navLinks from '../constants'



export const AsideNav = (props) => {

    return (
        <aside className="md:block hidden flex flex-column min-w-[300px] h-screen ">
            <div className="w-full flex flex-col justify-between items-center p-4">
                <ul className="list:none">

                    {
                        navLinks.map((link, index) => (
                            <li key={index} className={`${index !== navLinks.length - 1 ? 'my-5' : 'my-0'} 
                             border-2 border-black p-3 w-[220px] text-center navLinks duration-300 
                             rounded-[15px] bg-[#e1e1e1] text-[1.2rem] font-semibold hover:bg-black hover:text-yellow-300 cursor-pointer ${props.activeComponent == link.id ? "bg-black text-yellow-300" : "bg-[#e1e1e1] text-black"} `}

                                onClick={() => {
                                    props.loadComponent(link.id)
                                    props.showAsActive(link.id)
                                }}
                                activeClassName="active-class" >
                                {link.title}
                            </li>
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

}

export default AsideNav;
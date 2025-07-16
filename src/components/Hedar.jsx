import React, { useState } from 'react'
import Container from './Container'
import logo from '../assets/logo.png'
import { FaBars } from "react-icons/fa";
import { GiCrossedSwords } from "react-icons/gi";

const Hedar = () => {
    let [menu, setMenu] = useState(false)
    return (
        <header className='py-4'>
            <Container>
                <div className=" lg:flex items-center">
                    <div className=" w-full lg:w-2/12 ">
                        <img src={logo} alt="" />
                    </div>
                    <div className="w-full lg:w-10/12 py-3 px-3 text-center">
                        <ul className={`lg:flex gap-7 justify-center duration-300 ease-in-out ${menu == true ? "bg-[#F5F5F3]  opacity-0 h-[0] lg:h-[0] z-[-1] lg:mt-0 mt-0":"bg-[#FF00FF] opacity-100 lg:h-[35px] h-[200px] lg:bg-[#fff]  "  }`}>
                            <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626] py-1 duration-300 ease-in-out hover:font-bold  cursor-pointer '>Home</li>
                            <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626] py-1 duration-300 ease-in-out hover:font-bold  cursor-pointer '>Shop</li>
                            <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626] py-1 duration-300 ease-in-out hover:font-bold  cursor-pointer '>About</li>
                            <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626] py-1 duration-300 ease-in-out hover:font-bold  cursor-pointer '>Contacts</li>
                            <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626] py-1 duration-300 ease-in-out hover:font-bold cursor-pointer '>Journal</li>
                        </ul>
                    </div>
                    <div className="lg:hidden absolute top-0 pt-2 right-2 z-[1]" onClick={()=>setMenu(!menu)}>{menu ?<GiCrossedSwords />:<FaBars />}
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Hedar
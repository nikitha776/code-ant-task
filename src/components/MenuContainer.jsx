import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

const MenuContainer = ({ isOpen }) => {
    return (
        <div className={`fixed bg-[#6C6C6C4D] bg-opacity-30 top-[7.5%] left-0 w-full h-full z-40 text-[#414651] transition-opacity duration-1000 ease-linear ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`bg-white pb-2 w-full transform transition-transform duration-1000 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <ul>
                    <select className="px-4 py-2 border border-[#E9EAEB] w-[80%] rounded-md ml-4 mb-4 outline-none">
                        <option>Nikitha</option>
                        <option>Kalyan</option>
                    </select>
                    <li className="w-[80%] ml-[5%] flex m-2 mt-0 hover:bg-zinc-50"><IoHomeOutline className="font-extrabold text-xl m-2 mr-2" /><div className="text-[#414651] font-medium mt-1">Repositories</div></li>
                    <li className="w-[80%] ml-[5%] flex m-2 mt-0"><FaCode className="font-extrabold text-xl m-2 mr-2" /><div className="text-[#414651] font-medium mt-1">AI Code Review</div></li>
                    <li className="w-[80%] ml-[5%] flex m-2"><CiCloudOn className="font-extrabold text-xl m-2 mr-2" /><div className="text-[#414651] font-medium mt-1">Cloud Security</div></li>
                    <li className="w-[80%] ml-[5%] flex m-2"><FaBook className="font-extrabold text-xl m-2 mr-2" /><div className="text-[#414651] font-medium mt-1">How to Use</div></li>
                    <li className="w-[80%] ml-[5%] flex m-2"><IoSettingsOutline className="font-extrabold text-xl m-2 mr-2" /><div className="text-[#414651] font-medium mt-1">Settings</div></li>
                    <li className="ml-[5%] w-[80%] flex m-2"><IoCallOutline className="font-extrabold text-xl m-2 mr-2" /><div className="text-[#414651] font-medium mt-1">Support</div></li>
                    <li className="ml-[5%] w-[80%] flex m-2"><IoLogOutOutline className="font-extrabold text-xl m-2 mr-2" /><div className="text-[#414651] font-medium mt-1">Logout</div></li>
                </ul>
            </div>
        </div>
    )
}

export default MenuContainer


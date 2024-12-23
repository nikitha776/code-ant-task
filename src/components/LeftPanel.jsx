import React from 'react'
import logo from '../assets/Frame 10.png'
import { IoHomeOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

const LeftPanel = () => {
  return (
    <div className = "sm:w-[20%] bg-[#FFFFFF] h-screen border-r border-[#E9EAEB] px-4 fixed sm:block hidden">
        <div className = "w-[50%] m-auto my-4 mb-6">
            <img src={logo}></img>
        </div>
        <select className = "px-4 py-1 border border-[#E9EAEB] ml-[10%] w-[80%] rounded-md">
            <option>Nikitha</option>
            <option>Kalyan</option>
        </select>
        <ul>
            <li className = "my-4 py-1 px-2 bg-[#1570EF] rounded-md text-white ml-[10%] w-[80%] flex"><IoHomeOutline className = "text-white font-extrabold text-xl m-1 mr-2"/><div className = "m-1 font-semibold">Repositories</div></li>
            <li className = "ml-[10%] w-[80%] flex m-2"><FaCode className = "font-extrabold text-xl m-1 mr-2"/><div className = "text-[#414651] font-medium">AI Code Review</div></li>
            <li className = "ml-[10%] w-[80%] flex m-2"><CiCloudOn className = "font-extrabold text-xl m-1 mr-2"/><div className = "text-[#414651] font-medium">Cloud Security</div></li>
            <li className = "ml-[10%] w-[80%] flex m-2"><FaBook className = "font-extrabold text-xl m-1 mr-2"/><div className = "text-[#414651] font-medium">How to Use</div></li>
            <li className = "ml-[10%] w-[80%] flex m-2"><IoSettingsOutline className = "font-extrabold text-xl m-1 mr-2"/><div className = "text-[#414651] font-medium">Settings</div></li>
        </ul>
        <ul className = "absolute bottom-8 left-4 w-[90%]">
          <li className = "ml-[10%] w-[80%] flex m-2"><IoCallOutline className = "font-extrabold text-lg m-1 mr-2"/><div className = "text-[#414651] font-medium">Support</div></li>
          <li className = "ml-[10%] w-[80%] flex m-2"><IoLogOutOutline className = "font-extrabold text-xl m-1 mr-2"/><div className = "text-[#414651] font-medium">Logout</div></li>
        </ul>
    </div>
  )
}

export default LeftPanel
import React from 'react'
import { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import RepositoryCard from './RepositoryCard';
import logo from '../assets/Frame 10.png'
import MenuContainer from './MenuContainer'

const RepoContainer = () => {
    const [count, setCount] = useState(7);
    const [isOpen,setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }

    return (

        <div className="sm:ml-[20%] bg-zinc-100 h-screen flex justify-center items-center">
            <div className="sm:h-[95%] sm:w-[97%] w-[100%] h-[100%] bg-white rounded-lg border broder-[#E9EAEB] overflow-y-auto">
                <div className = {`${!isOpen ? 'border border-[#E9EAEB]' : ''} sm:hidden flex justify-between h-[7.5%] items-center z-50`}>
                    <div className="ml-4"><img src={logo} className = "w-[80%] h-auto"></img></div>
                    <button className = "mr-4" onClick = {handleMenuClick}>{isOpen ? <IoMdClose className = "text-3xl"/> : <IoMdMenu className = "text-3xl"/>}</button>
                </div>
                {isOpen && <MenuContainer isOpen = {isOpen}/>}
                <div className="border-b border-[#E9EAEB] px-6 pt-4 pb-4">
                    <div className="sm:flex sm:justify-between">
                        <div className = "sm:mb-0 mb-3">
                            <div className="text-xl font-medium text-[#181D27] mb-2">Repositories</div>
                            <div className="text-[#414651] text-sm mb-1">{count} total repositories</div>
                        </div>
                        <div className="flex gap-3">
                            <button className="border rounded-md border-[#E9EAEB] py-1 px-4 bg-zinc-50 h-[55%]">Refresh All</button>
                            <button className="text-white bg-[#1570EF] rounded-md px-4 py-1 h-[55%]">+ Add Repository</button>
                        </div>
                    </div>
                    <div className="flex border border-[#E9EAEB] sm:w-1/4 shadow-sm rounded-md mt-4">
                        <IoMdSearch className="m-2 text-xl font-bold" />
                        <input type="text" className="px-4 py-2 outline-none" placeholder="Search Repositories"></input>
                    </div>
                </div>
                <div className = "">
                    <RepositoryCard name="desgin-system" language="React" visibility="Public" />
                    <RepositoryCard name="codeant-ci-app" language="Javasript" visibility="Private" />
                    <RepositoryCard name="mobile-app" language="Swift" visibility="Public" />
                    <RepositoryCard name="blog-website" language="HTML/CSS" visibility="Public" />
                    <RepositoryCard name="e-commerce-platform" language="Java" visibility="Private" />
                    <RepositoryCard name="social-network" language="PHP" visibility="Public" />
                    <RepositoryCard name="mobile-app" language="Swift" visibility="Private" />
                </div>
            </div>
        </div>
    )
}

export default RepoContainer

// import React, { useState } from "react";
// import { IoMdSearch, IoMdMenu, IoMdClose } from "react-icons/io";
// import RepositoryCard from "./RepositoryCard";
// import logo from "../assets/Frame 10.png";
// import MenuContainer from "./MenuContainer";

// const RepoContainer = () => {
//   const [count] = useState(7);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleMenuClick = () => setIsOpen(!isOpen);

//   return (
//     <div className="sm:ml-[20%] bg-zinc-100 h-screen flex justify-center items-center relative">
//       <div className="sm:h-[95%] sm:w-[97%] w-full h-full bg-white rounded-lg border border-[#E9EAEB] overflow-y-auto">
//         {/* Mobile Header */}
//         <div className={`sm:hidden flex justify-between items-center h-[7.5%] px-4 border-b border-[#E9EAEB]`}>
//           <img src={logo} alt="Logo" className="w-[30%]" />
//           <button onClick={handleMenuClick} className="text-3xl">
//             {isOpen ? <IoMdClose /> : <IoMdMenu />}
//           </button>
//         </div>

//         {/* Sidebar */}
//         {isOpen && <MenuContainer isOpen={isOpen} onClose={handleMenuClick} />}

//         {/* Content Header */}
//         <div className="border-b border-[#E9EAEB] px-6 pt-4 pb-4">
//           <div className="sm:flex sm:justify-between items-center">
//             <div className = "sm:mb-0 mb-2">
//               <h1 className="text-2xl font-bold text-[#181D27] mb-2">Repositories</h1>
//               <p className="text-[#414651] text-sm">{count} total repositories</p>
//             </div>
//             <div className="flex gap-3">
//               <button className="border rounded-md border-[#E9EAEB] py-1 px-4 bg-zinc-50">Refresh All</button>
//               <button className="text-white bg-[#1570EF] rounded-md px-4 py-1">+ Add Repository</button>
//             </div>
//           </div>
//           <div className="flex border border-[#E9EAEB] shadow-sm rounded-md mt-4">
//             <IoMdSearch className="m-2 text-xl" />
//             <input type="text" className="px-4 py-2 outline-none w-full" placeholder="Search Repositories" />
//           </div>
//         </div>

//         {/* Repository Cards */}
//         <div className="px-6">
//           <RepositoryCard name="design-system" language="React" visibility="Public" />
//           <RepositoryCard name="codeant-ci-app" language="JavaScript" visibility="Private" />
//           <RepositoryCard name="mobile-app" language="Swift" visibility="Public" />
//           <RepositoryCard name="blog-website" language="HTML/CSS" visibility="Public" />
//           <RepositoryCard name="e-commerce-platform" language="Java" visibility="Private" />
//           <RepositoryCard name="social-network" language="PHP" visibility="Public" />
//           <RepositoryCard name="mobile-app" language="Swift" visibility="Private" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RepoContainer;


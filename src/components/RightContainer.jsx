import React from 'react'
import title from '../assets/Frame 10.png'
import githubLogo from '../assets/image 1.png'
import bitBucketLogo from '../assets/Icon.png'
import azureLogo from '../assets/image.png'
import gitLabLogo from '../assets/image (1).png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoKeyOutline } from "react-icons/io5";

const RightContainer = () => {
    const [isSAAS, setIsSaas] = useState(true);
    const navigate = useNavigate();

    const handleClickSAAS = () => { setIsSaas(true) }
    const handleClickSelf = () => { setIsSaas(false) }
    const handleLogin = () => {navigate('/repositories')}
    return (
        <div className="lg:w-[50%] lg:block w-[100%] h-screen bg-zinc-50 flex mlg:items-center justify-center flex-wrap gap-0">
            <div className="md:mt-[10%] md:h-[70%] w-[90%] h-[70%] mt-[25%] md:m-auto  bg-white rounded-xl border border-[#E9EAEB] p-3">
                <div className="border-b border-[#E9EAEB] p-4">
                    <div className="w-[150px] m-auto">
                        <img src={title}></img>
                    </div>
                    <div className="md:ml-[32%] ml-[20%] py-8">
                        <p className="font-medium text-[#181D27] text-xl">Welcome to CodeAnt AI</p>
                    </div>
                    <div className="width-[90%]">
                        <button onClick={handleClickSAAS} className={`${isSAAS ? 'bg-[#1570EF] text-white' : 'bg-zinc-50 text-[#414651] border border-[#E9EAEB]'} py-2 px-4 w-[50%] rounded-md`}>SAAS</button>
                        <button onClick = {handleClickSelf} className={`w-[50%] ${!isSAAS ? 'bg-[#1570EF] text-white border border-[#E9EAEB]' : 'bg-zinc-50 text-[#414651]'} py-2 px-4 rounded-md`}>Self Hosted</button>
                    </div>
                </div>
                {isSAAS && <div className = "flex justify-center flex-wrap gap-2 text-[#171717]">
                    <button className="md:py-2 flex md:w-[70%] w-[95%] border border-[#E9EAEB]  px-4 py-[2%] rounded-md mt-4" onClick = {handleLogin}>
                        <div className="flex m-auto">
                            <img src={githubLogo} className="mr-4"></img>
                            <p className="text-[#171717] font-medium">Sign in with GitHub</p>
                        </div>
                    </button>
                    <button className="md:py-2 md:w-[70%] w-[95%] border border-[#E9EAEB] px-4 py-[2%] rounded-md flex" onClick = {handleLogin}>
                        <div className="flex m-auto">
                            <img src={bitBucketLogo} className="mr-4"></img>
                            <p className="text-[#171717] font-medium">Sign in with BitBucket</p>
                        </div>
                    </button>
                    <button className="md:py-2 md:w-[70%] w-[95%] border border-[#E9EAEB] px-4 py-[2%] rounded-md flex" onClick = {handleLogin}>
                        <div className="flex m-auto">
                            <img src={azureLogo} className="mr-4 h-auto w-auto"></img>
                            <p className="text-[#171717] font-medium">Sign in with Azure Devops</p>
                        </div>
                    </button>
                    <button className="md:py-2 md:w-[70%] w-[95%] border border-[#E9EAEB] px-4 py-[2%] rounded-md flex" onClick = {handleLogin}>
                        <div className="flex m-auto">
                            <img src={gitLabLogo} className="mr-4"></img>
                            <p className="text-[#171717] font-medium">Sign in with GitLab</p>
                        </div>
                    </button>
                </div>}
                {!isSAAS && <div className = "flex justify-center flex-wrap gap-2 text-[#171717]">
                    <button className="md:py-2 flex w-[95%] border border-[#E9EAEB] px-4 py-[2%] rounded-md mt-4 md:w-[70%]" onClick = {handleLogin}>
                        <div className="flex m-auto">
                            <img src={gitLabLogo} className="mr-4"></img>
                            <p className="text-[#171717] font-medium">Self Hosted GitLab</p>
                        </div>
                    </button>
                    <button className="md:py-2 md:w-[70%] w-[95%] border border-[#E9EAEB] px-4 py-[2%] rounded-md flex" onClick = {handleLogin}>
                        <div className="flex m-auto">
                            <IoKeyOutline className = "text-[#171717] font-medium text-lg mt-1 mr-4"/>
                            <p className="text-[#171717] font-medium">Sign in with SSO</p>
                        </div>
                    </button>
                </div>}
            </div>

            <p className="md:ml-[30%] md:mt-[2%] mt-0 text-[#171717] m-auto">By signing up you agree to the <span className="font-semibold">Privacy Policy</span>.</p>

        </div>
    );
}
export default RightContainer
import React from 'react'
import { BsDatabase } from "react-icons/bs";

const RepositoryCard = (props) => {
    const { name, language , visibility } = props;
    return (
        <div className="w-[100%] h-[10%] py-4 px-6 hover:bg-zinc-50 border-b border-#D5D7DA">
            <div className="flex gap-4">
                <div className="font-semibold text-[#181D27] text-m">{name}</div>
                <div className="inline-block px-4 py-1 rounded-full bg-[#EFF8FF] border border-[#B2DDFF] text-[#175CD3] text-xs">{visibility}</div>
            </div>
            <div className="flex gap-8 text-sm text-[#181D27] mt-2">
                <div className="flex gap-2 items-center">
                    <div>{language}</div>
                    <div className="rounded-full bg-[#1570EF] w-2 h-2 "></div>
                </div>
                <div className="flex gap-2 items-center">
                    <BsDatabase />
                    <div>7058KB</div>
                </div>
                <div>Updated 2 days ago</div>
            </div>
        </div>
    )
}

export default RepositoryCard
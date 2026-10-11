import { TbSpeakerphone } from "react-icons/tb"

const Announcement=()=>{
    const Anc=[
        {
            dsc:'🔴 University will be closed on Friday (National holiday)'
        },
        {
            dsc:'🔵 Medterm exam schedule has been updated, please check the portal'
        },
        {
            dsc:'🟢 New liberary resources are now available online'
        },
    ]
    return(
        <main className="h-full w-full flex flex-col p-2">
            <div className="flex">
                <h1 className="text-sm font-bold flex gap-2"><TbSpeakerphone size={23} color="white"/> Recent Announcement</h1>
                <button className="h-full w-70 font-bold text-blue-500 text-[12px] flex items-center justify-end cursor-pointer">View All</button>
            </div>
        {Anc.map((btn)=>{
            return(
                <div className="flex flex-col">
                    <h1 className="text-[13px] m-1">{btn.dsc}</h1>
                </div>
            )
        })}
        </main>
    )
}
export default Announcement
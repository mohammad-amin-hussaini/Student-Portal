import Chart from "./Chart"
import { CgMore, CgMoreVerticalO } from "react-icons/cg"
import { FcDocument } from "react-icons/fc"
import { BiCalendar } from "react-icons/bi"
import { FaDownload } from "react-icons/fa"
import { LuContact } from "react-icons/lu"
import { BsEyeFill } from "react-icons/bs"
import { PiNeedleFill } from "react-icons/pi"
function Aside_section(){
    const chart=[
        {
            icon:'🟢',
            title:'Completed',
            num:0
        },
        {
            icon:'🔵',
            title:'In progress',
            num:6
        },
        {
            icon:'🟠',
            title:'Not started',
            num:0
        },
    ]
    const Action=[
        {
            color:'bg-blue-500',
            icon:<BiCalendar color="white" size={20}/>,
            title:"View Full Schedule"
        },
        {
            color:'bg-green-500',
            icon:<FcDocument color="white" size={20}/>,
            title:"Course Materials"
        },
        {
            color:'bg-purple-500',
            icon:<FaDownload color="white" size={20}/>,
            title:"Download Syllabus"
        },
        {
            color:'bg-yellow-500',
            icon:<LuContact color="white" size={20}/>,
            title:"Contact Instructor"
        }
    ]
    const Cards=[
    {
        title:'You Access modern Poetry course',
        icon:<BsEyeFill size={15} />,
        time:'1 hour ago',
        color:'bg-green-500'
    },
    {
        title:'Materials added to Linguistics',
        icon:<PiNeedleFill size={15} />,
        time:'5 hour ago',
        color:'bg-blue-500'
    },
    {
        title:'Assignment for English Literature',
        icon:<FcDocument size={15} />,
        time:'1 day ago',
        color:'bg-purple-500'
    },
]
    return(
        <main className="h-full w-full flex flex-col gap-2 p-2">
            <div className="h-1/3 w-full bg-gray-600 flex flex-col p-2 rounded-[10px]">
                <h1 className="h-1/5 w-full text-[12px] flex items-center">Overall Progress</h1>
                <section className="h-4/5 w-full flex">
                    <div className="h-full w-1/3 flex flex-col">
                        <Chart/>        
                    </div>
                    <div className="h-full w-2/3 flex flex-col p-2 justify-between">
                    {chart.map((btn)=>{
                        return(
                        <div className="h-full w-full flex gap-20">
                        <h1 className="text-[12px] font-bold">{btn.icon}  {btn.title} </h1>
                        <h1 className="text-[12px] font-bold">{btn.num}</h1>
                        </div>
                        )
                    })}
                    </div>
                </section>
            </div>
            <div className="h-1/3 w-full bg-gray-600 flex flex-col p-2 gap-1 rounded-[10px]">
                    <header className="h-1/5 w-full flex text-[12px] gap-2">< CgMoreVerticalO size={18}/> More Actions</header>
                    <div className="h-4/5 w-full grid grid-cols-2 grid-rows-2 gap-2">
                    {Action.map((btn)=>{
                        return(
                            <h1 className="h-full w-34 border border-gray-300 rounded-sm flex">
                                <div className={`h-full w-1/3 flex justify-center items-center`}>
                                    <p className={`h-6 w-8 rounded-[5px] flex justify-center items-center ${btn.color}`}>{btn.icon}</p>
                                </div>
                                <div className="h-full w-2/3 text-[10px] flex items-center text-blue-300">{btn.title}</div>
                            </h1>
                        )
                    })}
                    </div>
            </div>
            <div className="h-1/3 w-full bg-gray-600 rounded-[10px] p-3">
            <h1 className="h-1/5 w-full flex justify-between">
                <p className='text-[13px]'>Recent Activities</p>
                <p className="text-[11px] text-blue-500 hover:scale-105 transition-all active:scale-95">View All</p>
            </h1>
            <div className="h-4/5 w-full flex flex-col">
                {Cards.map((btn)=>{
                    return(
                    <nav className="h-full w-full flex gap pt-1">
                        <h1 className="h-full w-1/7 flex">
                            <div className={`h-5 w-5 ${btn.color} flex items-center justify-center rounded-sm`}>{btn.icon}</div>
                        </h1>
                        <h1 className="h-full w-4/7 flex text-[11px] text-blue-200 items-center">{btn.title}</h1>
                        <h1 className="h-full w-2/7 flex text-[10px] justify-end items-center">{btn.time}</h1>
                        
                    </nav>
                    )
                })}
            </div>
            </div>
        </main>

    )
}
export default Aside_section
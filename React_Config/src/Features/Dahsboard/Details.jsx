import { Descriptions } from "antd"
import { BiBookOpen, BiCheck } from "react-icons/bi"
import { BsClipboard2Check } from "react-icons/bs"
import { CgCalendar } from "react-icons/cg"
import { MdAddHomeWork, MdHomeWork } from "react-icons/md"

const Details=()=>{
    const Card=[
        {
            title:'Courses',
            num:"6",
            Descriptions:'Total enrolled courses',
            icon:<BiBookOpen size={27} color="white"/>,
            color:"bg-blue-600"
        },
        {
            title:'Attendance',
            num:"92%",
            Descriptions:'Overall Attendance',
            icon:<BiCheck size={27} color="white"/>,
            color:"bg-green-400"
        },
        {
            title:'Pending Homeworks',
            num:"3",
            Descriptions:'Need your attention',
            icon:<BsClipboard2Check size={27} color="white"/>,
            color:"bg-yellow-600"
        },
        {
            title:'Upcoming Exams',
            num:"2",
            Descriptions:'In next 14 days',
            icon:<CgCalendar size={27} color="white"/>,
            color:"bg-purple-600"
        }

    ]
    const color={
        
    }
    return(
        <main className="h-full w-full flex p-2 gap-2">
            {Card.map((btn)=>{
                return(
                    <div className="h-full w-1/4 flex hover:scale-95 transition-all bg-gray-700 rounded-sm">
                        <aside className="h-full w-1/3 flex justify-center items-center">
                        <div className={`h-10 w-10 ${btn.color} rounded-md flex justify-center items-center`}>
                            {btn.icon}
                        </div>
                        </aside>
                        <section className="h-full w-2/3 flex flex-col pt-2 pb-2">
                            <h1 className="text-[12px]">{btn.title}</h1>
                        <h1 className="text-md font-bold">{btn.num}</h1>
                        <p className="text-[12px] text-gray-200">{btn.Descriptions}</p>
                        </section>
            </div>
                )
            })}
            
        </main>
    )
}
export default Details
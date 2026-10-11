import { BiBadgeCheck, BiCalendar, BiCheckbox, BiHistory } from "react-icons/bi"
import { BsStarFill } from "react-icons/bs"
import { FaBookOpen } from "react-icons/fa"
import { LuClock3 } from "react-icons/lu"

function Section_aside(){
    const Cards=[
            {
                icon:<FaBookOpen size={25} />,
                title:'Total Courses',
                Descriptions:'We are enrolled in 6 courses',
                num:6,
                color:"bg-blue-500"
            },
            {
                icon:<BiBadgeCheck size={25} />,
                title:'Completed Courses',
                Descriptions:'So far this semester',
                num:0,
                color:"bg-green-500"
            },
            {
                icon:<LuClock3 size={25} />,
                title:'In progress',
                Descriptions:'All courses are going',
                num:6,
                color:"bg-purple-500"
            },
            {
                icon:<BsStarFill size={25} />,
                title:'Average Progress',
                Descriptions:'Across all courses',
                num:"42%",
                color:"bg-yellow-500"
            }
        ]
    return(
        <main className="h-full w-full flex gap-2">
            {Cards.map((btn)=>{
                return(
                <nav className="h-full w-1/4 bg-gray-600 rounded-md hover:scale-95 transition-all flex ">
                    <aside className="h-full w-1/4 flex justify-center items-center">
                        <h1 className={`h-10 w-10 ${btn.color} rounded-sm flex justify-center items-center`}>{btn.icon}</h1>
                    </aside>
                    <section className="h-full w-3/4 flex flex-col p-2">
                        <p className="text-blue-100 text-[12px]">{btn.title}</p>
                        <p className="text-md font-bold">{btn.num}</p>
                        <p className="text-gray-200 text-[10px]">{btn.Descriptions}</p>
                    </section>
                </nav>
                )
            })}
        </main>
    )
}
export default Section_aside
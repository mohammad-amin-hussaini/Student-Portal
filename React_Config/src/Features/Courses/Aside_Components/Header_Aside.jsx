import { PiBookOpenText } from "react-icons/pi"
import { BiCalendar } from "react-icons/bi"
const Header_Aside=()=>{
    return(
        <main className="h-full w-full flex">
            <h1 className="h-full w-13 flex justify-center p-2"><PiBookOpenText size={35} color="blue"/></h1>
                <nav className="h-full w-full flex flex-col">
                    <h1 className="font-bold text-xl">Courses</h1>
                    <p className="text-[13px] ">View and manage your enrolled courses, check progress, and access course materials.</p>
                </nav>
                <div className="h-10 w-50 bg-gray-600 rounded-sm flex items-center justify-center gap-2 mr-2 border border-blue-600"><BiCalendar size={15}/><h1 className=" text-[12px] font-bold">Current Semester: 7</h1></div>
        </main>
    )
}
export default Header_Aside
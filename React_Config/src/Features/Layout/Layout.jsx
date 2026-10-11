import { PiStudent } from "react-icons/pi"
import Buttons from "./Buttons"
import { BiBell, BiBookOpen, BiBuilding, BiCalendarCheck, BiSearch, BiSun } from "react-icons/bi"
import { BsClipboardCheck, BsSubscript } from "react-icons/bs"
import { FiFileText, FiSettings } from "react-icons/fi"
import { MdDashboard } from "react-icons/md"
import { CgProfile } from "react-icons/cg"


function Layout({children}){
    return(
        <main className="h-screen w-full flex">
            <aside className="h-full w-1/5 flex bg-gray-700 flex-col pl-4">
                <header className="h-1/5 w-full flex items-center gap-1" >
                    <PiStudent size={25} color="blue"/>
                    <h1 className="font-bold text-blue-700 text-xl">StPortal</h1>
                </header>
                <section className=" w-full flex flex-col">
                    <Buttons name={'Dashboard'} icon={<MdDashboard size={20} color="white"/>} to="/"/>
                    <Buttons name={'Courses'} icon={<BiBookOpen size={20} color="white"/>} to="/courses"/>
                    <Buttons name={'Attendance'} icon={<BiCalendarCheck size={20} color="white"/>} to="/attendance"/>
                    <Buttons name={'Homework'} icon={<BsClipboardCheck size={20} color="white"/>} to="/homework"/>
                    <Buttons name={'Exams'} icon={<FiFileText size={20} color="white"/>} to="/exams"/>
                    <Buttons name={'Office'} icon={<BiBuilding size={20} color="white"/>} to="/office"/>
                    <Buttons name={'Setting'} icon={<FiSettings size={20} color="white"/>} to="/settings"/>
                    
                </section>
                
            </aside>
            <section className="h-full w-4/5 bg-gray-900">
                <header className="h-1/10 w-full flex items-center pl-3 border border-b-gray-600 bg-gray-800">
                    <div className="relative h-full w-1/2 flex items-center">
                        <input type="text" className="h-9 w-150 border bg-gray-700 border-gray-400 placeholder:text-gray-50 pl-10 rounded-md placeholder:text-sm"  placeholder="Search Anything.." />
                        <BiSearch size={18} color="white" className="absolute inset-0 top-5 left-3"/>
                    </div>
                    <nav className="h-full w-1/2 flex justify-end p-5 gap-4">
                        <BiBell size={23} color="white"/>
                        <BiSun size={23} color="white"/>
                        <CgProfile size={23} color="white"/>
                    </nav>
                </header>
                <div className="h-9/10 w-full flex text-white">
                    {children}
                </div>
            </section>
        </main>
    )
}
export default Layout

                
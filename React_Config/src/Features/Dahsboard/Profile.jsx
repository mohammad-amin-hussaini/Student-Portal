
import { CgCalendar } from "react-icons/cg"
import { FaGraduationCap } from "react-icons/fa"
import { FaCalendarDays } from "react-icons/fa6"

function Profile(){
    const icon = [
        {
            title:'Student ID: 1405',
            icon:<CgCalendar size={18}/>
        },
        {
            title:'Semester 7',
            icon:<FaCalendarDays size={15}/>
        },
        {
            title:'English Literature',
            icon:<FaGraduationCap size={18}/>
        }
    ]
    return(
        <main className="h-full w-full flex p-2 bg-blue-900 rounded-md">
            <aside className="h-full w-1/8 p-2 flex justify-center items-center">
                <img src="/img/profile.png" className="h-17 w-17 rounded-full border-b-2 border-l-2 border-pink-400" />
            </aside>
            <section className="h-full w-5/8 flex flex-col gap-2">
                <h1 className="h-1/4 w-full text-[16px]">Welcome back, Sayed Mohammad Amin!</h1>
                <p className="h-1/4 w-full text-[12px] text-gray-300 flex items-center">Keep going your effort will pay off.</p>

            <div className="gap-6 h-2/4 w-full items-center flex">
                {icon.map((btn)=>{
                    return(
                    <p className="text-[12px] text-gray-200 flex gap-2">{btn.icon} {btn.title}</p>
                )
                 })}
            </div>
            </section>
            <aside className="h-full w-2/8 flex items-center text-[12px]">"Small steps every day <br/> leads to big results"</aside>
        </main>
    )
}
export default Profile
import { BsCircleFill } from "react-icons/bs"
import { CgCalendar } from "react-icons/cg"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"


function Schedule(){
    const List =[
        {
            time:'08:00-09:30',
            title:'English Literature',
            adress:"Dr Rahimi -Room 305",
            border:'border-b border-gray-600',
            icon:<BsCircleFill size={15} color="pink"/>,
            color:'bg-green-500',
            btn_text:'Completed'
        },
        {
            time:'10:00-11:30',
            title:'Modern Poetry',
            adress:"Prof. Karimi -Rom 305",
            border:'border-b border-gray-600',
            icon:<BsCircleFill size={15} color="blue"/>,
            color:'bg-blue-500',
            btn_text:'Completed'
        },
        {
            time:'01:00-02:30',
            title:'Linguistics',
            adress:"Dr. Farhad -Room 2003",
            border:'border-b border-gray-600',
            icon:<BsCircleFill size={15} color="green"/>,
            color:'bg-gray-500',
            btn_text:'Completed'
        },
        {
            time:'03:00-04:30',
            title:'Literary Criticism',
            adress:"Prof. Sharifi -Room 303",
            border:'border-b border-gray-600',
            icon:<BsCircleFill size={15} color="whie"/>,
            color:'bg-purple-500',
            btn_text:'Completed'
        },
    ]
    return(
        <main className="h-full w-full flex flex-col">
            <h1 className="h-1/6 w-full border-b border-gray-600 flex font-bold text-[13px] gap-2 p-2"><CgCalendar size={18} color="blue"/> Today's Schedule</h1>
            <section className="h-4/6 w-full">

            {List.map((btn)=>{
                return(
                <div className={`h-1/4 w-full flex ${btn.border}`}>
                    <h1 className="h-full w-1/4 flex ">
                        <p className="h-full w-1/4 flex justify-center items-center">{btn.icon}-</p>
                        <p className="h-full w-3/4 text-[12px] flex justify-center items-center">{btn.time}</p>
                    </h1>
                    <h1 className="h-full w-2/4">
                        <p className="text-[11px]">{btn.title}</p>
                        <p className="text-[10px] text-gray-300">{btn.adress}</p>
                    </h1>
                    <h1 className="h-full w-1/4 flex items-center justify-end pr-5">
                        <button className={`h-5 w-15 rounded-sm font-bold text-[10px] ${btn.color}`}>{btn.btn_text}</button>
                    </h1>
                </div>
                )
            })}

            </section>
            <footer className="h-1/6 w-full flex items-center p-2  text-blue-500">
                <button className="font-bold text-[12px] flex gap-2 justify-center items-center cursor-pointer">View Full Schedule <FaChevronRight/> </button>
            </footer>
        </main>
    )
}
export default Schedule
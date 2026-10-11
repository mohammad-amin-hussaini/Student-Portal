import { CgCalendar } from "react-icons/cg"
import { BsClipboard2Check } from "react-icons/bs"
import { Descriptions } from "antd"
function UpcomingExam(){
    const Exam=[
        {
            title:'Modern Poetry',
            Descriptions:'Final Exam',
            date:'Oct 12, 2026 - 09:00 AM',
            btn_title:'In 10 days',
            border:'border-b border-gray-500'
        },
        {
            title:'Linguistic',
            Descriptions:'Midterm Exam',
            date:'Oct 18, 2026 - 10:00 AM',
            btn_title:'In 16 days'
        },
    ]

    const style="rounded-md hover:scale-95 transition-all"
    return(
        <footer className={`h-1/2 w-full bg-gray-700 ${style}`}>
            <div className="h-1/4 w-full flex gap-2 p-2">
                <CgCalendar size={20} color="red"/>
                <h1 className="font-bold text-[12px]">Upcoming Exams</h1>
                <div className="h-full w-80 text-blue-500 cursor-pointer font-bold text-[12px] flex justify-end items-center">View All</div>
            </div>
            <section className="h-3/4 w-full flex flex-col">
            {Exam.map((btn)=>{
                return(
                <div className={`h-2/5 w-full p-2 flex ${btn.border}`}>
                    <nav className="h-full w-1/2">
                        <h1 className="h-1/2 w-full font-bold text-[12px]">{btn.title}</h1>
                        <h1 className="h-1/2 w-full text-[12px] text-gray-300">{btn.Descriptions}</h1>
                    </nav>
                    <nav className="h-full w-1/2 flex">
                        <h1 className="h-full w-2/3 text-[12px] text-gray-300">{btn.date}</h1>
                        <h1 className="h-full w-1/3">
                            <button className="h-6 w-15 rounded-sm bg-blue-600 text-[10px] hover:scale-105 transition-all cursor-pointer">{btn.btn_title}</button>
                        </h1>
                    </nav>
                    
                </div>
                )
            })}
            </section>
        </footer>
    )
}
export default UpcomingExam
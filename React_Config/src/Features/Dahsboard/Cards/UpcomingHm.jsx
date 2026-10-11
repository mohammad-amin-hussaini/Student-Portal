import { Descriptions } from "antd"
import { BsClipboard2Check } from "react-icons/bs"
function UpcomingHm(){
    const Homwork =[
        {
            title:'English Literature',
            Descriptions:'Easy: The role of women in 19th century literature',
            date:'Due: Oct5, 2026',
            color:'bg-yellow-500',
            border:"border-b border-gray-500",
            btn_name:'pending'
        },
        {
            title:'Linguistics',
            Descriptions:'Research Language and Culture',
            date:'Due: Oct5, 2026',
            color:'bg-yellow-500',
            border:"border-b border-gray-500",
            btn_name:'pending'
        },
        {
            title:'Modern Poetry',
            Descriptions:'Analysis of selected poem',
            date:'Due: Oct5, 2026',
            color:'bg-green-500',
            btn_name:'Submitted'
        },
    ]
    const style="rounded-md hover:scale-95 transition-all"
    return(
        <header className={`h-1/2 w-full bg-gray-700 p-2 text-[12px] ${style}`}>
            <div className="h-1/5 w-full flex gap-2">
                <BsClipboard2Check size={15} color="yellow"/>
                <h1 className="font-bold">Upcoming Homewrok</h1>
                <button className="h-full w-75 flex justify-end items-center"><h1 className="font-bold text-[12px] text-blue-600 cursor-pointer">View All</h1></button>
            </div>
            
            <section className="h-4/5 w-full flex flex-col">
            {Homwork.map((btn)=>{
                return(
                <div className={`h-1/3 w-full flex ${btn.border}`}>
                    <h1 className="h-full w-3/5">
                        <p className="h-1/2 w-full text-[10px]">{btn.title}</p>
                        <p className="h-1/2 w-full text-[10px] text-gray-300">{btn.Descriptions}</p>
                    </h1>
                    <h1 className="h-full w-1/5 text-[10px]">{btn.date}</h1>
                    <h1 className="h-full w-1/5 flex items-center ">
                        <button className={`h-6 w-15 ${btn.color} rounded-sm text-white text-[11px] cursor-pointer hover:scale-105 transition-all`}>{btn.btn_name}</button>
                    </h1>
                </div>

                )
            })}
            </section>
        </header>
    )
}
export default UpcomingHm
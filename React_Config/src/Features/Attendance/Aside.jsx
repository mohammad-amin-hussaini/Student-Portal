import { BiBookOpen, BiCalendar } from "react-icons/bi"
import { BsClock } from "react-icons/bs"
import { GiGraduateCap } from "react-icons/gi"
import Allproducts from "../AllProducts/Allproducts"
const Aside=()=>{
    const {atten,setAtten}=Allproducts()
    return(
        <main className="h-full w-full bg-gray-800 rounded-sm p-2 flex flex-col">
            <h1 className="h-1/5 w-full flex">
                <p className="h-full w-1/2 font-bold text-[13px] flex gap-2"><GiGraduateCap size={23}/> My Classes</p>
                <div className="h-full w-1/2 text-[12px] flex justify-end">Click on class to view students and attendance details.</div>
            </h1>
            <span className="h-4/5 w-full flex gap-1">
            {atten.map((card)=>{
                const Icon=card.icon
                return(
                <div className="h-full w-1/5 bg-gray-700 rounded-sm border-gray-400 border p-2 hover:scale-95 transition-all">
                    <header className="h-1/2 w-full flex">
                        <h1 className="h-full w-1/4"><p className={`h-10 w-10 p-2 ${card.color} rounded-sm flex justify-center items-center`}> <Icon size={27}/></p></h1>
                        <div className="h-full w-3/4 flex flex-col pl-1">
                            <h1 className="h-1/2 w-full text-[13px]">{card.title}</h1>
                            <h1 className="h-1/2 w-full text-[10px]">{card.teacher}</h1>
                        </div>
                    </header>
                    <footer className="h-1/2 w-full flex flex-col">
                        <p className="h-1/3 w-full text-[9px] flex gap-2 items-center"><BiCalendar size={12}/>{card.sections}</p>
                        <p className="h-1/3 w-full flex items-center gap-2 text-[9px]"><BsClock size={10}/>{card.time}</p>
                        <p className="h-1/3 w-full flex justify-end">
                            <h1 className="h-full w-15 bg-gray-400 rounded-sm text-[9px] pl-2 hover:scale-95 transition-all">{card.students} Students</h1>
                        </p>
                    </footer>
                </div>
                )
            })}
            </span>
        </main>
    )
}
export default Aside
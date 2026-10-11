import { useNavigate, useLocation } from "react-router"


function Buttons({name,icon,to}){
    const navigate = useNavigate()
    const {pathname}=useLocation()
    let color= pathname==to?"bg-gray-900":"bg-gray-700"
    return(
        <main className="h-full w-full flex flex-col">
            <div onClick={()=>navigate(to)} className={`h-11 w-full flex gap-1 items-center p-2 cursor-pointer ${color}`}>
                {icon}
                <h1 className="font-bold text-[13px] text-white">{name}</h1>
            </div>

        </main>
    )
}
export default Buttons
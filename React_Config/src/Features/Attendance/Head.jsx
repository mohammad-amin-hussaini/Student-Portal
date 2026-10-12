import { BsCalendarCheck } from "react-icons/bs"

function Head(){
    return(
        <main className="h-full w-full flex">
            <div className="h-full w-1/20 flex justify-center items-center">
                <BsCalendarCheck size={25} color="blue"/>
            </div>
            <div className="h-full w-19/20 flex flex-col pt-1">
                <h1 className="font-bold">Attendance</h1>
                <h1 className="text-[12px] text-blue-200">View your class attendance and stay on top of your progress</h1>
            </div>
        </main>
    )
}
export default Head
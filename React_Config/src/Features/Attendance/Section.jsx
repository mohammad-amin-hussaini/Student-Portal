import Table from "./Attendance_Table/Table"
import Calendar from "react-calendar"
import { useState } from "react"

function Section(){
    const [date,setDate]=useState(Date())
    const color= date?"bg-blue-500":"bg-gray-700"
    return(
        <main className="h-full w-full flex bg-gray-800">
            <Table/>
            <nav className="h-full w-2/6 p-4">
                <Calendar tileClassName={`${date?"bg-gray-700":"bg-blue-700"} !py-2 !rounded-lg !font-sans !border-2 !border-gray-800`}
                className="w-full bg-gray-800 border-none p-2"
                value={date}
                onChange={setDate}
                />
            </nav>
        </main>
    )
}
export default Section
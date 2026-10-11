import Layout from "../Layout/Layout"
import { Routes,Route } from "react-router"
import Dashboard from "../Dahsboard/Dashboard"
import Homework from "../Homework/Homework"
import Courses from "../Courses/Courses"
import Exams from "../Exams/Exams"
import Attendance from "../Attendance/Attendance"
import Office from "../Office/Office"
import Settings from "../Settings/Settings"


const MyRoutes =()=>{
    return(
        <Routes>
            <Route path="/" element={<Layout><Dashboard/></Layout>}/>
            <Route path="/dashboard" element={<Layout><Dashboard/></Layout>}/>
            <Route path="/courses" element={<Layout><Courses/></Layout>}/>
            <Route path="/homework" element={<Layout><Homework/></Layout>}/>
            <Route path="/exams" element={<Layout><Exams/></Layout>}/>
            <Route path="/attendance" element={<Layout><Attendance/></Layout>}/>
            <Route path="/office" element={<Layout><Office/></Layout>}/>
            <Route path="/settings" element={<Layout><Settings/></Layout>}/>

        </Routes>
    )
}
export default MyRoutes
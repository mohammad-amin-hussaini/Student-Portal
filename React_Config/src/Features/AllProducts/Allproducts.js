import { BiBookmark, BiBookOpen, BiCalendar, BiMessageSquare } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { GiGlobe } from "react-icons/gi";
import { LuUserRound } from "react-icons/lu";
import { create } from "zustand";
const ProgressCard=[
    {
        id:1,
        progress:55,
        icon:BsEyeFill,
        title:'English Literature',
        teacher:'Dr. Rahimi',
        color:'bg-blue-500'
        
    },
    {
        id:2,
        progress:70,
        icon:BsEyeFill,
        title:'Moder Poetry',
        teacher:'Prof. Karimi',
        color:'bg-purple-500'
    },
    {
        id:3,
        progress:60,
        icon:BsEyeFill,
        title:'Linguistics',
        teacher:'Dr. Farhad',
        color:'bg-yellow-500'
    },
    {
        id:4,
        progress:40,
        icon:BsEyeFill,
        title:'Literary Criticism',
        teacher:'Eng. Faiyaz',
        color:'bg-green-500'
    },
    {
        id:5,
        progress:25,
        icon:BsEyeFill,
        title:'Transilation Studies',
        teacher:'Dr. Nasiri',
        color:'bg-pink-500'
    },
    {
        id:6,
        progress:83,
        icon:BsEyeFill,
        title:'Academic Writing',
        teacher:'Prof. Jalili',
        color:'bg-slate-300'
    },
]

const AttendanceCard=[
    {
        icon:BiBookmark,
        color:'bg-purple-500',
        title:'Modern Poetry',
        sections:'Sat, Thir, Thu',
        time:'08:00-09:30',
        students:'8'
    },
    {
        icon:BiBookOpen,
        color:'bg-blue-500',
        title:'English Literature',
        sections:'Mon, Wed, Thu',
        time:'10:00-11:30',
        students:'10'
    },
    {
        icon:BiMessageSquare,
        color:'bg-green-500',
        title:'Linguistics',
        sections:'Sat, Wed',
        time:'11:00-12:30',
        students:'12'
    },
    {
        icon:GiGlobe,
        color:'bg-yellow-500',
        title:'Transilation Studies',
        sections:'Sun, Mon, Wed, Thu',
        time:'07:00-09:00',
        students:'6'
    },{
        icon:LuUserRound,
        color:'bg-rose-300',
        title:'Academic Writing',
        sections:'Sat, Sun ,Wed',
        time:'10:00-11:30',
        students:'10'
    },
]
const Allproducts = create((set)=>({
    Products:ProgressCard,
    atten:AttendanceCard,
    
    setProducts:(newItems)=>set({Products:newItems}),
    setAtten:(newItems)=>set({atten:newItems})
}))
export default Allproducts
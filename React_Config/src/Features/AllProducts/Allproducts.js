import { BiCalendar } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
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
const Allproducts = create((set)=>({
    Products:ProgressCard,
    
    setProducts:(newItems)=>set({Products:newItems}),
}))
export default Allproducts
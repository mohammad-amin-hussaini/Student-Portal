import { BiBookmark,BiChevronRight } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"
import { LuContact } from "react-icons/lu"
import Allproducts from "../../AllProducts/Allproducts"


function Section_(){

    const {Products,setProducts}=Allproducts()
    return(
        <main className="h-full w-full flex flex-col p-2">
            <header className="h-1/9 w-full flex items-center justify-between">
                <h1 className="text-sm flex items-center font-bold gap-1"><BiBookmark size={20}/> My Courses</h1>
                    <div className="h-10 w-70 relative">
                        <input className="h-7 w-50 border border-blue-300 rounded-sm placeholder:text-[12px] flex pl-7" placeholder="Search Courses" type="text" />
                        <BsSearch size={13} color="gray" className="absolute inset-0 top-2 left-2 "/>
                    </div>
            </header>

            <div className="h-8/9 w-full">

        {Products.map((product)=>{
            const Icon = product.icon;
            
            return(
                    //MY COURSES part
                <nav className="h-1/6 w-full flex border border-gray-600 rounded-sm p-1">
                    <header className="h-full w-1/10 flex items-center">
                        <div className={`h-10 w-10 ${product.color} m-1 rounded-sm flex items-center justify-center`}>
                            <Icon size={25} color={'white'}/>
                        </div>
                    </header>

                    <section className="h-full w-3/10 flex flex-col justify-center">
                        <h1 className="text-[12px]">{product.title}</h1>
                        <h1 className="text-[10px] flex items-center gap-1"><LuContact/>{product.teacher}</h1>
                    </section>
                    
                    <div className="h-full w-4/10">
                        <div key={product.id} className="h-full w-full flex flex-col gap-1 justify-center">
                            <nav className="flex justify-between">
                                <span className="text-[12px] text-blue-400">Progress</span>
                                <span className="text-[12px]">{product.progress}%</span>
                            </nav>
                            <nav className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                                <nav className="h-full bg-blue-500 rounded-full" style={{width:`${product.progress}%`}}>

                                </nav>
                            </nav>
                    </div>

                    </div>

                    <footer className="h-full w-2/10 flex items-center justify-end pr-2">
                        <button className="h-6 w-23 text-[10px] bg-gray-600 rounded-sm text-blue-300 flex gap-1 items-center justify-center hover:scale-105 transition-all active:scale-95">View Details<BiChevronRight size={20}/> </button>
                    </footer>
                    </nav>
            )
        })}
            </div>
        </main>
    )
}
export default Section_
import Header_Aside from "./Aside_Components/Header_Aside"
import Section_aside from "./Aside_Components/Section_aside"

function Aside(){
    
    return(
        <main className="h-full w-full">
            <header className="h-2/5 w-full flex">
                <Header_Aside/>
            </header>
            <div className="h-3/5 w-full flex gap-2 p-2">
                <Section_aside/>
            </div>
        </main>
    )
}
export default Aside
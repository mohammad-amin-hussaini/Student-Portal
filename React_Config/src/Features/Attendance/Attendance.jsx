import Header from "./Head"
import Aside from "./Aside"
import Section from "./Section"
function Attendance(){
    return(
        <main className="h-full w-full flex flex-col p-2 gap-2">
            <header className="h-1/10 w-full flex">
                <Header/>
            </header>
            <aside className="h-3/10 w-full flex">
                <Aside/>
            </aside>
            <section className="h-6/10 w-full flex">
                <Section/>
            </section>
        </main>
    )
}
export default Attendance
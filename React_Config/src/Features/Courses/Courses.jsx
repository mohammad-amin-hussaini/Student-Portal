import Aside from "./Aside"
import Section from "./Section"
function Courses(){
    return(
        <main className="h-full w-full flex flex-col p-3">
            <aside className="h-3/10 w-full flex">
                <Aside/>
            </aside>
            <section className="h-7/10 w-full flex">
                <Section/>
            </section>
        </main>
    )
}
export default Courses
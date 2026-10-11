import Aside_section from "./Section_Components/Aside_Section"
import Section_ from "./Section_Components/Sections_"
const Section=()=>{
    return(
        <main className="h-full w-full flex">
            <section className="h-full w-2/3 flex">
                <Section_/>
            </section>
            <aside className="h-full w-1/3 flex">
                <Aside_section/>
            </aside>
        </main>
    )
}
export default Section
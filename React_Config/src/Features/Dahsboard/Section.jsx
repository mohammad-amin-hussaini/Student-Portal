import Announcement from "./Cards/Announcement"
import UpcomingHm from "./Cards/UpcomingHm"
import UpcomingExam from "./Cards/UpcommingExam"
import Schedule from "./Cards/Schedule"

const Section=()=>{
    const style="rounded-md hover:scale-95 transition-all"
    return(
        <main className="h-full w-full flex gap-4">
            <section className="h-full w-1/2 flex flex-col gap-2">
                <header className={`h-3/5 w-full bg-gray-700 ${style}`}>
                    <Schedule/>     
                </header>
                <footer className={`h-2/5 w-full bg-gray-700 ${style}`}>
                    <Announcement/>
                </footer>
            </section>


            <section className="h-full w-1/2 flex flex-col gap-2">
                <UpcomingHm/>
                <UpcomingExam/>
            </section>
        </main>
    )
}
export default Section
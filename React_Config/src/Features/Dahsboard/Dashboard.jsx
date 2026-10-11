import Profile from "./Profile"
import Details from "./Details"
import Section from "./Section"
function Dashboard(){
    return(
        <main className="h-full w-full flex flex-col">
            <div className="h-1/6 w-full flex pl-2 pt-2 pr-2">
              <Profile/>  
            </div>
            <div className="h-1/6 w-full">
                <Details/>
            </div>
            <div className="h-4/6 w-full p-3">
                <Section/>
            </div>
        </main>
    )
}
export default Dashboard

import Layout from "./Features/Layout/Layout"
import MyRoutes from "./Features/Routes/MyRoutes"
import { BrowserRouter } from "react-router"
const App = () => {

  return (
  <BrowserRouter>
    <MyRoutes/> 
  </BrowserRouter> 
  )
}

export default App
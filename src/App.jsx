import { Outlet } from "react-router-dom"
import Header from "./component/Header"
import Foter from "./component/Foter"

function App() {


  return (
   <div className="maion">
      <Header/>
         <Outlet/>
      <Foter/>
   </div>
  )
}

export default App

import { Outlet } from "react-router-dom"
import Header from "./component/Header"
import Foter from "./component/Foter"
import { Provider } from 'react-redux'
import store from "./redux/store"



function App() {


  return (
   <div className="maion">
      <Provider store={store}>
               <Header/>
                  <Outlet/>
               <Foter/>
      </Provider>
   </div>
  )
}

export default App

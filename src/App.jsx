import { Outlet } from "react-router-dom"
import Header from "./component/Header"
import Foter from "./component/Foter"
import { Provider } from 'react-redux'
import { persistor, store } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react"


function App() {


  return (
   <div className="maion">
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}> 
               <Header/>
                  <Outlet/>
               <Foter/>
         </PersistGate>
      </Provider>
   </div>
  )
}

export default App

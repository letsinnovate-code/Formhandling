import { useEffect } from "react"
import Nav from "./components/Nav"
import Mainroutes from "./routes/Mainroutes"
import { useDispatch } from "react-redux"
import { asynccurrentuser } from "./store/actions/userAction"

const App = () => {

   const dispatch = useDispatch();


    useEffect(()=>{
dispatch(asynccurrentuser());

    } , [])
  return (
   

    <>
      <Nav />
      <Mainroutes />
    </>
  )
}

export default App
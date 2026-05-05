
import {  useEffect } from "react"
import Nav from "./components/Nav"
import Mainroutes from "./routes/Mainroutes"
import { useDispatch, useSelector } from "react-redux";
import { asyncgetcurrentuser } from "./store/actions/userActions";
import { asyncgetproducts } from "./store/actions/productsActions";


const App = () => {

const dispatch = useDispatch();

const user = useSelector((state)=>state.userReducer.users);
console.log(user);



useEffect(() => {
  

  !user && dispatch(asyncgetcurrentuser());
   
 

}, [user, dispatch]);

useEffect(() => {
dispatch(asyncgetproducts())
},[dispatch])




   
  return (
   

    <>
      <Nav />
      <Mainroutes />
    </>
  )
}

export default App
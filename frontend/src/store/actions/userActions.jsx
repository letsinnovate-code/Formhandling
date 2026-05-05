import { toast } from "react-toastify";
import axios from "../../api/Axiosconfig"
import { logoutUser, setUser } from "../reducers/userSlice";




export const asyncgetcurrentuser = () => async (dispatch , getstate) =>{
    try {
  const user =   JSON.parse(localStorage.getItem("user"))


  if(user){
    dispatch(setUser(user))
  }
  
   
    
    } catch (error) {
        console.log(error);
    }
}


export const asynclogoutuser = () => async (dispatch , getstate) =>{
    try {
        localStorage.removeItem("user");
        dispatch(logoutUser());
        dispatch(asyncgetcurrentuser());
    } catch (error) {
        toast.error("Error occurred while logging out user");
        console.error(error);
    }
}

export const asyncloginuser = (user) => async (dispatch , getstate) =>{
    
    try {
        const res = await axios.get(`/users?username=${user.username}&password=${user.password}`);
        localStorage.setItem("user", JSON.stringify(res.data[0]));


        dispatch(asyncgetcurrentuser());

       
        

    } catch (error) {
        toast.error("Invalid username or password");
        console.error(error);
    }
}

export const asyncregisteruser = (user) => async (dispatch , getstate) =>{

    try {

        const res = await axios.post("/users", user);
        console.log(res);
        toast.success("User registered successfully");
        
    } catch (error) {
        toast.error("Error occurred while registering user");
        console.error(error);
        
    }

}
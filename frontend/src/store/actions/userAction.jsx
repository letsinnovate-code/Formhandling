import axios from "../../api/Axiosconfig";



export const asyncregisteruser = (user) => async (dispatch, getState) => {

    try {
        const res = await axios.post("/users", user);
        console.log(res.data);
        
        


    } catch (error) {
        alert(error)

    }

}
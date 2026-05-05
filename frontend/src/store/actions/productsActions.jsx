import axios from "../../api/Axiosconfig";
import { setProducts } from "../reducers/productSlice";



export const asyncgetproducts = () =>async (dispatch, getState) =>{
    try {
        const res = await axios.get("/products");
        
       

        console.log(res);
        
        dispatch(setProducts(res.data));
    } catch (error) {
        console.error(error);
        
        
    }

}

export const asynccreateproducts = (product) =>async (dispatch, getState) =>{
    try {
        const res = await axios.post("/products", product);
        console.log(res);
    } catch (error) {
        console.error(error);
        
        
    }

}
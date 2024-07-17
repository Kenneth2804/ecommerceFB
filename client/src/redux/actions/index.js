import axios from "axios";
import { useDispatch } from "react-redux";
const URL = "/";

export const type ={
    POST_USER: "POST_USER",
    GET_PRODUCTS: "GET_PRODUCTS",
}
export const postuser = (payload) =>{
    return async function(dispatch){
        try {
            const json = await axios.post(`${URL}postusuario`, payload)
            return json
        } catch (error) {
            console.log(error)
        }
    }
}

export const getproducts = () =>{
    return async function(dispatch){
        try {
            
        const productos = await axios.get(`${URL}getproducts`)  
        return dispatch({
            type: type.GET_PRODUCTS,
            payload: productos.data
        })  

        } catch (error) {
            
            console.log(error)

        }
    }
}
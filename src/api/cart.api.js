import axios from "axios";
import { updateUser } from "./auth.api";
import { v4 as uuidv4 } from 'uuid'

export const getProductOfCart = async (idcart) =>{
    return await axios.get("http://localhost:3050/api/cart/"+"123456");
}
export const updateCart = async  (iduser) => {
    
}
export const createCart = async (iduser) => {
    const idCart = uuidv4();
    updateUser(iduser,{"cart":idCart});
    const data = {
        "id": idCart,
        "user" : iduser,
        "products" : []
    };
    console.log("idcart",idCart);
    console.log("info cart",data);
    return await axios.post("http://localhost:3050/api/cart",data);
}
import axios from "axios";
import { API, URL_API } from "./const.api";

export const ProductAPI = {
  getProducts: (data) => API.get(`${URL_API}/product`),
};

export const getProduct = async (slug) => {
  try {
    return await axios.get(URL_API+ '/product/'+slug)
  } catch (e) {
    
  }
}
export const getAll= async () =>{
  return await axios.get(URL_API+ '/product');
}

export const searchProduct = async (name) =>{
  try {
      return await axios.get(URL_API+ '/product'+'?name_like='+name);
  }
  catch(e){
      return;
  }
}
export const updateProduct = async (id,data) => {
  try {
      return await axios.put(URL_API+ '/product'+'/'+id,data);
  }
  catch(e){
      return;
  }
}

export const createProduct = async (id,data) => {
  try {
      return await axios.post(URL_API+ '/product'+'/'+id,data);
  }
  catch(e){
      return;
  }
}
export const delProduct = async (id) => {
  return await axios.delete(URL_API+ '/product'+'/'+id).then(res=>{
      console.log(res)
  });
}
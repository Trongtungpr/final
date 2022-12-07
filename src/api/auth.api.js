import { API, URL_API } from "./const.api";
import axios from "axios";
export const AuthAPI = {
  login: (data) => API.post(`${URL_API}/auth/login`, data),
  register: (data) => API.post(`${URL_API}/auth/register`, data),
};


export const getUserById = async (id) =>{
   try {
        return await axios.get(URL_API+'/users'+'/'+id);
  }
  catch(e){
      return;
  }
};

export const updateUser = async (id,data) => {
   try {
       return await axios.put(URL_API+'/users'+'/'+id,data);
   }
   catch(e){
       return;
   }
}

export const createUser = async (id,data) => {
   try {
       return await axios.post(URL_API+'/users'+'/'+id,data);
   }
   catch(e){
       return;
   }
}

export const getAllUser = async () =>{
  try {
     return await axios.get(URL_API+'/users');
 }
 catch(e){
     return;
 }
};
export const delUser = async (id) => {
   return await axios.delete("http://localhost:3050/api/users/"+id).then(res=>{
       console.log(res)
   });
}
export const searchUser = async (email) => {
   console.log("call search",URL_API+'/users'+"?email_like="+email);
   return await axios.get(URL_API+'/users'+"?email_like="+email);
}
// import axios from "axios";
// const url="http://localhost:8080/game"
// export const getAllGame=()=>{
//     return axios.get(`${url}`)
// };
// export const getById=(id)=>{
//     return axios.get(`${url}/${id}`)
// };
import axios from "axios";
const url="http://localhost:8080/customer"
export const getbyNameAndPsw=(name,psw)=>{
    return axios.get(`${url}/${name}/${psw}`)
}
export const addCustaxios=(obj)=>{
    return axios.post(`${url}`,obj)
}
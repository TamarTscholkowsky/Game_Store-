import axios from "axios";
const url="http://localhost:8080/buy"
export const addOrderaxios=(obj)=>{
    return axios.post(`${url}`,obj)
}
export const getOrdersByCustIdFromAxios=(id)=>{
    return axios.get(`${url}/${id}`)
}

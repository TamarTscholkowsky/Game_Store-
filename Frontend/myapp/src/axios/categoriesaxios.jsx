import axios from "axios";
const url="http://localhost:8080/category"
export const getAllCategory=()=>{
    return axios.get(`${url}`)
}
export const addCategory=(obj)=>{
    alert("99999")
    debugger
    return axios.post(`${url}`,obj)
}
export const updateCategory=(id)=>{
    return axios.put(`${url}/${id}`)
}
export const deleteCategoryaxios=(id)=>{
    return axios.delete(`${url}/${id}`)
}



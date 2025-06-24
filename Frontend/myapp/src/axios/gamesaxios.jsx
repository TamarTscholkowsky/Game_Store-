// cr.get('/',categoriesController.getAll)
// cr.post('/',categoriesController.add)
// cr.put('/:id',categoriesController.update)
// cr.delete('/:id',categoriesController.delete)
import axios from "axios";
const url="http://localhost:8080/game"
export const getAllGame=()=>{
    debugger
    return axios.get(`${url}`)
};
export const getById=(id)=>{
    return axios.get(`${url}/${id}`)
};
export const getByCategoryId=(id)=>{
    return axios.get(`${url}/byCategory/${id}`)
}
export const add=(obj)=>{
    debugger
    return axios.post(`${url}`,obj)
}
export const updateGame=(id,obj)=>{
    debugger
    return axios.put(`${url}/${id}`,obj)
}
export const deleteGame=(id)=>{
    return axios.delete(`${url}/${id}`)
}
export const setUser=(cust)=>{
    return{type:"USER_IS_LOGGIN_IN",payload:cust}
    
}
export const setmanagement=(flag)=>{
    return{type:"SET_MANAGENT",payload:flag}
}
export const addcustaction=(obj)=>{
return{type:"ADDING_A_CUSTOMER",payload:obj}
}
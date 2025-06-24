export const addBuy=(obj)=>{
    debugger
    return{type:"ADD_TO_LIST_BUY",payload:obj}

}
export const loadBuy=(list)=>{
    return{type:"SET_LIST_ORDER",payload:list}
}
export const deletegame=(id)=>{
    debugger
    return{type:"DELETE_GAME",payload:id}
}
export const additem=(id)=>{
return{type:"ADD_ITEM",payload:id}
}
export const lessitem=(id)=>{
    return{type:"LESS_ITEM",payload:id}
}
export const addOrder=(obj)=>{
return{type:"ADD_ORDER",payload:obj}
}
export const deleteBuy=()=>{
    return{type:"DELETE_BUY_REDUX"}
}

   
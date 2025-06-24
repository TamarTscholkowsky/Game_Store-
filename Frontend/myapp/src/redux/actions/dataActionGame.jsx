export const loadGame=(obj)=>{
    return{type:"SET_LISTGAMES",payload:obj}
} 
export const deletById=(id)=>{
    debugger
    return{type:"DELETE_BY_ID",payload:id}
}
export const loadgetById=(obj)=>{
    return{type:"GET_GAME_BY_ID",payload:obj}
}
export const addgame=(obj)=>{
    return{type:"ADD_GAME",payload:obj}
}
export const edit=(obj,id)=>{

    debugger
    return{type:"EDIT_GAME",payload:{id:id,obj:obj}}
}
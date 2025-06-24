export const loadCategory=(obj)=>{
        return{type:"SET_LISTCATEGORY",payload:obj}
} 
export const addCategoryreducer=(obj)=>{
        debugger
 return{type:"ADD_TO_LIST_CATEG",payload:obj}
}
export const deleteCategoryreducers=(id)=>{
return {type:"DELETE_CATEGORY",payload:id}
}

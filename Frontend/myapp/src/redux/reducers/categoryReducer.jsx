import {produce} from 'immer'
export const Category={
    listCategory:[
        // {id:1,name:"דמיון"},
        // {id:2,name:"הרכבה"},
        // {id:3,name:"בובות"},
        // {id:4,name:"מכוניות"}
    ]
}
export const dataCategory=produce((state,action)=>{
switch(action.type){
    case "ADD_TO_LIST_CATEG":{
        debugger
        state.listCategory.push({...action.payload})
    break;}
    case "SET_LISTCATEGORY":{state.listCategory=action.payload}
        break;
    case "DELETE_CATEGORY":{state.listCategory=state.listCategory.filter(x=>x._id!=action.payload)}
    //state.listGame=state.listGame.filter(x => x._id !== action.payload)}
    
    default:
    break;
}
},Category)
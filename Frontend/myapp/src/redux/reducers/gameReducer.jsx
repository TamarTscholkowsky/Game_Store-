import {produce} from 'immer'
export const Game={
    listGame:[
        // {id:1,name:"קפלה",price:20,img:"pic3.jpg",age:7,idCategory:5},
        // {id:2,name:"בובה אמריקאית",price:10,img:"pic3.jpg",age:7,idCategory:2},
        // {id:3,name:"מכונית",price:50,img:"pic3.jpg",age:4,idCategory:3}
    ]
};
export const dataGame=produce((state,action)=>{
switch(action.type){
    case "SET_LISTGAMES":{state.listGame=action.payload}//טעינת כל המשחיקם
    break;
    case "ADD_GAME":state.listGame.push(action.payload)//הוספת משחק
    break;
     case "DELETE_ONE_GAME":{state.listGame=action.payload}//
    break;
    case "DELETE_BY_ID" :{ 
        state.listGame=state.listGame.filter(x => x._id !== action.payload)} 
        break
    case "EDIT_GAME":{
        let y=state.listGame.filter(g=>g._id==action.payload.id)[0]
        const index=state.listGame.indexOf(y) 
        state.listGame[index]={...action.payload.obj}}
    default:   
}
},Game);
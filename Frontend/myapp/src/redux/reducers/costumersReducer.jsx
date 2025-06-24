import {produce} from 'immer'

export const Costumer={
    listCostumer:[],

     currentUser:{},
     ismanagement:false,  
};
export const dataCostumer=produce((state,action)=>{
switch(action.type){
  case "USER_IS_LOGGIN_IN" :state.currentUser=action.payload 
  break
  case "ADDING_A_CUSTOMER":state.listCostumer.push(action.payload)
  break
  case "SET_MANAGENT":state.ismanagement=action.payload
    default:
    break;     
}
},Costumer);
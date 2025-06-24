import{combineReducers,createStore } from "redux";
import{dataGame} from "./reducers/gameReducer";
import {dataCategory} from "./reducers/categoryReducer";
import{dataCostumer} from "./reducers/costumersReducer";
import{dataBuy} from "./reducers/buyReducer";
const reducer=combineReducers({dataGame,dataCategory,dataCostumer,dataBuy})
export const store=createStore(reducer)
window.store=store
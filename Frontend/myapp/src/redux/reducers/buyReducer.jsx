import { produce } from 'immer'
export const Buy = {
    listBuy: [],
    listOrder: []

};
export const dataBuy = produce((state, action) => {
    switch (action.type) {

        case "SET_LIST_ORDER": {
            state.listOrder=action.payload;
            // for (let i = 0; i < action.payload.length; i++) {
            //     state.listOrder.push(action.payload[i])
            // } 
            break;
        }
        // state.listOrder=action.payload}
        case "ADD_TO_LIST_BUY": {
            let x = state.listBuy.findIndex(j => j._id == action.payload._id)
            if (x != -1) {
                state.listBuy[x].amount = state.listBuy[x].amount + 1
                state.listBuy[x].total = state.listBuy[x].amount * state.listBuy[x].price;

            }
            else {
                const obj = { ...action.payload, amount: 1, total: action.payload.price }
                state.listBuy.push(obj)
            }
            break
        }
        case "DELETE_GAME": {
            state.listBuy = state.listBuy.filter(x => x._id != action.payload)
            break;
        }
        case "ADD_ITEM": {
            let x = state.listBuy.findIndex(j => j._id == action.payload)
            state.listBuy[x].amount = state.listBuy[x].amount + 1;
            state.listBuy[x].total = state.listBuy[x].amount * state.listBuy[x].price;
            break;
        }
        case "LESS_ITEM": {
            let x = state.listBuy.findIndex(j => j._id == action.payload)
            if (state.listBuy[x].amount == 1)
                alert("לא ניתן להסיר")
            else {
                state.listBuy[x].amount = state.listBuy[x].amount - 1;
                state.listBuy[x].total = state.listBuy[x].amount * state.listBuy[x].price;
            }
            break;
        }
        case "ADD_ORDER": {
            state.listOrder.push(action.payload)
            state.listBuy=[]
            break;
        }
        case "DELETE_BUY_REDUX": { state.listBuy = [] }
        default:
            break;

    }
}, Buy);
import mongoose, {model,Schema } from "mongoose";

const games=Schema({
    name_produst:String,
    code_category:{
        type:mongoose.Types.ObjectId,
        ref:'category'
    },
    price:Number,
    pic:String,
    amount:Number
});
export default model('game',games);

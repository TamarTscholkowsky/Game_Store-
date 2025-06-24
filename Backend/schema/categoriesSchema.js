import {model,Schema } from "mongoose"
const categories=Schema({
    name:{
        type:String,
        required:true
    }
})
export default model('category',categories)
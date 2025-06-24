import mongoose, {model,Schema} from 'mongoose'
const buy=Schema({
    idCust:{
        type:String,
        required:true
    },
     dateBuy:String,
     totalPrice:Number,
     arrgames:[
        {idGame:{type:mongoose.Types.ObjectId,ref:'game'},
        name_produst:String,amount:Number,total:Number}
     ]

      
})
export default model('buy',buy)
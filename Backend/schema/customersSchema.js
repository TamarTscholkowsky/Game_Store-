import mongoose,{ model,Schema } from "mongoose"
const customer= Schema({
    name:String,
    psw:String,
CreditDetails:{ number:String,
    EffectiveDate:Date,
    posteriorDigits:String}
});
export default model('customer',customer);

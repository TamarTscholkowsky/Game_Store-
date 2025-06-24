import express from 'express';
import mongoose from 'mongoose';
import cr from './routes/categoriesRoute.js'
import g from './routes/gamesRoute.js'
import cs from './routes/customersRouter.js'
import b from './routes/buyRouter.js'
import cors from 'cors'
const app=express()
app.use(cors())
app.listen("8080",()=>{
    console.log("The server is running!!");
})
app.use('/category',cr);
app.use('/game',g);
app.use('/customer',cs);
app.use('/buy',b);
app.use(express.static('images'))
//חיבור השרת למסד
mongoose.connect('mongodb://0.0.0.0:27017/game_store')
.then(()=>{
console.log("connect mongo")
})
.catch((err)=>{
console.log(err.message);
})
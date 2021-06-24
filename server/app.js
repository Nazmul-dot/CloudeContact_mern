//require part
require('dotenv').config();
const express=require("express");
const app=express();
const cors =require('cors')
const cookieParser = require("cookie-parser")
 require('./db/mongoCon')
 const User=require('./models/userSchema')
app.use(cookieParser())
// for json data
app.use(express.json())
//
// app.use(cors({
//     origin:['http://localhost:3000'],
//     credentials:true,
// }));

app.use(require('./route/userRouter'))
app.use(require('./route/contactRouter'))
const port=process.env.PORT  || 8000
app.listen(port ,()=>{
    console.log(`server running on ${port}`)
})
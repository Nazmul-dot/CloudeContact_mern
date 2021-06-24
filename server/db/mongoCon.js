const mongoose=require("mongoose");
const DB=process.env.DATABASE
mongoose.connect('mongodb://localhost:27017/cloud_contact_self',{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>console.log("mongodb connection successfull....."))
.catch((err)=>console.log(err));

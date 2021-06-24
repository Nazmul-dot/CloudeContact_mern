const express=require('express')
const router=express.Router()
const User=require('../models/userSchema')
const auth=require('../middleware/authenticate')
const bcrypt=require('bcryptjs')
router.get('/',(req,res)=>{
    res.send('hlw')
})

//register
router.post('/register',async(req,res)=>{
    console.log(req.body)
    // res.json({massage:req.body})

    const { name, email, password, cpassword } = req.body;
    if (!name || !email || !password || !cpassword) {
        return res.status(422).json({ error: "plz fill all fild" })
    }



    try {
        const data = await User.findOne({ email: email })
        if (data) {
            console.log('vhul')
           
            return res.status(422).json({ error: "email already exist.." })
           
        }
        else if (password !== cpassword) {
            console.log('vhul')
            return res.status(422).json({ error: "both password are not same" })
     
        }
        else {
            const docu = new User({ name, email, password, cpassword })
             const token=await docu.genationToken();
                console.log(token)
                res.cookie('jwtToken',token)
            await docu.save();
            console.log('register')
           // console.log(docu)
            res.status(201).json(docu)
            

        }


    } catch (error) {
        console.log(error)

    }
})
//login
router.post('/login',async(req,res)=>{
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            console.log('vhul')
            return res.status(400).json({ error: "fill all field" })
           
        }
        const userSignin = await User.findOne({ email: email });
        //console.log(userSignin)
        if (userSignin) {
            //res.json({ message: "user signin successfully" })
            const ismatch=await bcrypt.compare(password,userSignin.password)
            if(ismatch)
            {
                const token=await userSignin.genationToken();
                console.log(token)
                res.cookie('jwtToken',token)
               // console.log(res.cookie.jwtToken)
                
                console.log("user signin successfully")
                res.json(userSignin)   
            }
            else{
                console.log('vhul pass')
                return res.status(400).json({ error: "user error" })
            }
        }
        else {
            console.log('vhul')
            return res.status(400).json({ error: "user error" })
        }
    } catch (error) {
        console.log(error)
    }
})
//logout
router.get('/logout',auth,async(req,res)=>{
    req.user.tokens=[]
    res.clearCookie('jwtToken')
    console.log("logout")
    res.send(req.user)
})
//userloged
router.get('/userloged',auth,async(req,res)=>{
    console.log("userloged")
    res.send(req.user)
})
module.exports=router
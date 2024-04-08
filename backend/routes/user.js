const express = require('express');
const router = express.Router();

const jwt=require('jsonwebtoken')
const zod=require('zod');
require("dotenv").config();
const {authmiddleware}=require('../middleware')

const {User, Account}=require('../db');

const signupSchema = zod.object({
    username: zod.string().email(),
    password:zod.string(),
    firstname:zod.string(),
    lastname:zod.string()
  });
 


router.post("/signup",async(req,res,next)=>{
    const body=req.body;
    const {success}=signupSchema.safeParse(body);
    if(!success )
    {
        return res.json({
            message:'user invalid data of user'
        })
    }


    const existingUser = await User.findOne({
        username: req.body.username
    })


    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }
    
    
   

    const dbUser=await User.create(body);
    const userId = dbUser._id;
   

    const token=jwt.sign({
        userId:dbUser._id
    },process.env.JWT_SECRET)
   
    res.json({
        msg:'user created successfully',
        token:token
    })
    
});


router.get('/get/count',async(req,res)=>{
    const usercount=await User.countDocuments()

    if(!usercount)
    {
         res.status(500).json({success:false});
    }

    res.send({
        usercount:usercount
    });
})







 
const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})
router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
        
    });

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, process.env.JWT_SECRET);
  
        res.json({
            token: token
        })
        return;
    }

    
    res.status(411).json({
        message: "Error while logging in"
    })
})







module.exports = router;

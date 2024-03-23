const express=require('express');
const router=express.Router();
// const userRouter=require('./user');
const bookrouter=require('./books');
const authroutee=require('./author')
const userRouter=require('./user')

// router.use("/user",userRouter);
router.use("/books",bookrouter);
router.use("/getauthor",authroutee);
router.use('/user',userRouter);

module.exports=router;
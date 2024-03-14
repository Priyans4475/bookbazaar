const express=require('express');
const router=express.Router();
// const userRouter=require('./user');
const bookrouter=require('./books');
const authroutee=require('./author')

// router.use("/user",userRouter);
router.use("/books",bookrouter);
router.use("/getauthor",authroutee);

module.exports=router;
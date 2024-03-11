const express=require('express');
const router=express.Router();
// const userRouter=require('./user');
const bookrouter=require('./books');

// router.use("/user",userRouter);
router.use("/books",bookrouter);

module.exports=router;
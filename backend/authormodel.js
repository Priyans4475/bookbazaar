const mongoose=require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_SECRET ,
{
    dbName: "bookbazaar", // Specify the name of your database here
    
})
.then(()=>{console.log('database connected successfully');})
.catch((err)=>{console.log(err);});




const authorSchema= mongoose.Schema({
    
    authorName:{
        type:String,
        require:true

    },
    authorimage:{
        type:String,
        require:true
    },
   authorlink:{
    type:String,
    require:true
   }

    
})

const Author = mongoose.model('Author', authorSchema);

// const User=mongoose.model("User",userSchema);
module.exports={Author}

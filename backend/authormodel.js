const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://bookbazaar:priyans4475@cluster0.fvrepdx.mongodb.net/",
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

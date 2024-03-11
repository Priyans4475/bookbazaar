const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://bookbazaar:priyans4475@cluster0.fvrepdx.mongodb.net/",
{
    dbName: "bookbazaar", // Specify the name of your database here
    
})
.then(()=>{console.log('database connected successfully');})
.catch((err)=>{console.log(err);});

// const userSchema=mongoose.Schema({
// username:String,
// password:String,
// firstname:String,
// lastname:String
// })

const books=mongoose.Schema({
   
    bookTitle:{
        type:String,
        require:true

    },
    authorName:{
        type:String,
        require:true
    },
    imageURL:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    bookpdfURL:{
        type:String,
        require:true
    }


    
})

const Books=mongoose.model('Books',books)

// const User=mongoose.model("User",userSchema);
module.exports={Books}
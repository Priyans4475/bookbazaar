const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://bookbazaar:priyans4475@cluster0.fvrepdx.mongodb.net/",
{
    dbName: "bookbazaar", // Specify the name of your database here
    
})
.then(()=>{console.log('database connected successfully');})
.catch((err)=>{console.log(err);});

const userSchema=mongoose.Schema({
username:String,
password:String,
firstname:String,
lastname:String
})

const { Schema } = mongoose;




const booksSchema = new mongoose.Schema({
  
    bookTitle: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    bookpdfURL: {
        type: String,
        required: true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

// Export the schema
booksSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

booksSchema.set('toJSON',{
    virtuals:true,
})


// const authorSchema= new mongoose.Schema({
    
//     authorName:{
//         type:String,
//         require:true

//     },
//     authorimage:{
//         type:String,
//         require:true
//     },
//    authorlink:{
//     type:String,
//     require:true
//    }



    
// })
const Books = mongoose.model('Books', booksSchema);
// const Author = mongoose.model('Author', authorSchema);

const User = mongoose.model('User',userSchema);
module.exports={Books,User}


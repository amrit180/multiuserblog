const mongoose= require('mongoose');
const {ObjectId}= mongoose.Schema;

const categorySchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
        min:3,
    },
    slug:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        default:"",
    },
})

module.exports= mongoose.model("Category",categorySchema)
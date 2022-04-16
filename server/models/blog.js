const mongoose= require('mongoose');
const {ObjectId}= mongoose.Schema;

const blogSchema= new mongoose.Schema({
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
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fdefault-avatar-profile-icon-vector-18942381&psig=AOvVaw0uIi_OWSDWv22Kli9hM1q_&ust=1649877999820000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCMjz4tKgj_cCFQAAAAAdAAAAABAD",
    },
    // category:[{
    //     type:ObjectId,
    //     ref:"Category"
    // }],
    // likes:[{type:ObjectId,ref:"User"}],
    // comment:[{type:ObjectId,ref:"Comment"}]
})

module.exports= mongoose.model("Blog",blogSchema)
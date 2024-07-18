const mongoose =require('mongoose');

const postSchema = mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,   //To keep track on who is posting
        ref : "user"
    },
    title:String,
    description:String,
    image:String,
    profileImage:String,
    contact:Number,



    //  boards are like folder in pinterest  
    boards:{
        type:Array,
        default:[]
    },  

});  
// userSchema.plugin(plm);

module.exports = mongoose.model("post",postSchema); 
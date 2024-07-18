// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

const mongoose =require('mongoose');
const plm  = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pin");
const userSchema = mongoose.Schema({
    username:String,
    name:String,
    email:String,
    password:String,
    profileImage:String,
    contact:Number,



    //  boards are like folder in pinterest  
    boards:{
        type:Array,
        default:[]
    },  
    posts:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post"
        }
    ]

});

userSchema.plugin(plm);

module.exports = mongoose.model("user",userSchema);
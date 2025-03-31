const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userName : {
        type : "string",
        required : true,
    },
    password : {
        type : "string",
        required : true
    },
    email:{
        type : "string",
        required : true,
    }
}, {timeStamp : true});


module.exports = mongoose.model("User", UserSchema);

const mongoose = require('mongoose')
const Schema=mongoose.Schema;
const userSchema=new Schema({
    firstname : {type:String},
    middlename :{type:String},
    lastname:{type:String},
    email:{type:String},
    contact:{type:Number},
    address:{type:String},
    city:{type:String},
    state:{type:String},
    pincode:{type:String}
}
);
module.exports=mongoose.model("user",userSchema)

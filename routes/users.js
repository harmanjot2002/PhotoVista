const { mongoose, mongo } = require("mongoose");
const plm=require("passport-local-mongoose")

mongoose.connect("mongodb+srv://Harman:Harman@cluster0.7zlcmek.mongodb.net/instaclone")

const userSchema=mongoose.Schema({
  username:String,
  name:String,
  email:String,
  password:String,
  profileImage:String,
  bio:String,
  posts:[{type:mongoose.Schema.Types.ObjectID,ref:"post"}]
})

userSchema.plugin(plm);

module.exports=mongoose.model("user",userSchema);
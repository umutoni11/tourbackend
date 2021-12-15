import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    
    {
firstName:String,
lastName:String,
email:{
type:String,
required:true,

},
password:{
    type:String,
    required:true,
},

address:{
    type:String,
    default:"Rwanda"

},
gender:{
    type:String,
    enum:["male","female","other"],
},



},
{
    timestamps:true
}
);
const user= mongoose.model("User",userSchema);
export default user;
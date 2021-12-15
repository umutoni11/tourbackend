import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({

  title:{
      type:String,
  } ,   
  Description:{
      type:String, 
      required:true,
  },
tourName:{
    type:String,
    required:true,
},

seats:{
    type:Number,
    type:String,
},
Date:Date,
price:String,
address:{
    type:String,
    
},


},

{
    timestamps: true,
}



);
const tour= mongoose.model("Tour",tourSchema);
export default tour;
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRouter from "./src/routes/userRoutes"
import tourRouter from "./src/routes/tourRouter"


dotenv.config("./.env");
const app= express();


app.use(bodyParser.json());


app.use("/user",userRouter);
app.use("/tour",tourRouter);

app.use("/",(req,res) => res.status(200).json({
    message:"The path doesn't exist"
}));


const dbUrl=process.env.DATABASEURL;
mongoose.connect(dbUrl,).then(()=>console.log("Database connected successfully"));


app.listen(3030,()=>{

    console.log(`server is runing on port 3030`);
})

export default app;
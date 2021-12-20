import UserInfos from "../models/user";
import bcrypt from "bcrypt";
import TokenAuth from "../helpers/tokenAuth";

class UserController {

    //Create user in db

    static async createUser(req,res){

        const hashPassword = bcrypt.hashSync(req.body.password,10);

req.body.password = hashPassword;

        const user = await UserInfos.create(req.body);
        if(!user){
            return res.status (404).json({error:"user not registered"});


        }
        return res
        .status(200)
        .json({message:"User created successfully", data:user});
    }
    

//get all users

static async getAllUsers(req,res){
    const users = await UserInfos.find();

    if(!users){
        return res.status (404).json({error:"users not successfully retrieved"});

    }
    return res
    .status(200)
    .json({message:" successfully retrieved users", data:users});

}

static async getOneUser(req,res){
    const user= await UserInfos.findById(req.paramas.id);
    if(!user){
        return res.status(404).json({error:"user not found"})
    }
    return res.status(200).json({message:"user found successfully", data:user});
}

static async deleteOneUser(req,res){
    const user= await UserInfos.findByIdAnddelete(req.paramas.id);
    if(!user){
        return res.status(404).json({error:"user not found"})
    }
    return res.status(200).json({message:"user deleted successfully", data:user});
}


//LOGIN FUNCTION
 
 static async userLogin(req,res){

const user = await UserInfos.findOne({email:req.body.email});

if(!user){
    return res.status(404).json({error:"user not found! kindly register first"})
}


if(bcrypt.compareSync(req.body.password,user.password)){
    user.password=null;
    const token = TokenAuth.tokenGenerator({user:user});

    return res.status(200).json({message:"successfully logged in", token:token,data:user});

}
  return res.status(400).json({error:"password is wrong"});
 }












}
export default UserController;
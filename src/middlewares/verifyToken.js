import TokenAuth from "../helpers/tokenAuth";


const isUserExist = async(req,res,next)=>{

    try{
        const token =req.header("x-auth-token");

        if(!token){
            return res.status(400).json({error:""})
        }
        const data =TokenAuth.decodeToken(token);

        console.log(data);
req.user =data.user;




    }
catch(err){

console.log(err);


}

}
export default isUserExist;
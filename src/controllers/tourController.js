import tourInfo from "../models/tour";


class TourController {

    

    static async createTour(req,res){
        const tour = await tourInfo.create(req.body)

        if(!tour){
            return res.status (404).json({error:"tour not registered"});

        }
        return res
        .status(200)
        .json({message:"tour created successfully", data:tour});
    }
    



static async getAllTours(req,res){
    const tours= await tourInfo.find();

    if(!tours){
        return res.status (404).json({error:"tours not successfully retrieved"});

    }
    return res
    .status(200)
    .json({message:" successfully retrieved tours", data:tours});
}

//get one tour

static async getOneTour(req,res){
    
    const tour= await tourInfo.findById(req.params.id);

    if(!tour){
        return res.status (404).json({error:"tour not successfully retrieved"});

    }
    return res
    .status(200)
    .json({message:" successfully retrieved tour", data:tour});
}


//delete one tour


static async deleteOneTour(req,res){
    
    const tour= await tourInfo.findByIdAndDelete(req.params.id);

    if(!tour){
        return res.status (404).json({error:"tour not successfully deleted"});

    }
    return res
    .status(200)
    .json({message:" successfully deleted tour", data:tour});
}


}
export default TourController;
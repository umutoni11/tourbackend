import express from "express";

import TourController from "../controllers/tourController";
import tour from "../models/tour";
import Validator from "../middlewares/validator";
import verifyToken from "../middlewares/verifyToken";
import verifyAccess from "../middlewares/verifyAccess"


const tourRouter = express.Router();

tourRouter.post("/create",
    Validator.newTourRules(),
    Validator.validateInput,
    TourController.createTour);


tourRouter.post ("/create",verifyToken,
verifyAccess("admin")
,TourController.createTour)
tourRouter.get("/alltours", TourController.getAllTours);
tourRouter.get("/:id", TourController.getOneTour);
tourRouter.delete("/:id", TourController.deleteOneTour);

export default tourRouter;
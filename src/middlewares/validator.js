import { check, validationResult } from "express-validator";

class Validator {

    static validateInput = (req, res, next) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessage = errors.errors.map((err) => err.msg);

            return res.status(400).json({ message: errorMessage });
        }

        return next();

    };


    static newAccountRules() {

        return [
            check("email", "email invalid").trim().isEmail(),
            check("password", "password is not strong").trim().isStrongPassword(),
            check("lastName", "Last name should be valid").trim().isAlpha(),
            check("firstName", "first name should be valid").trim().isAlpha(),
            check("gender",
                "Gender should be valid among male, female,other")
                .trim()
                .isIn(["male", "female", "other"]),


        ];

    }
    static newTourRules() {
        return [

            
            check("title", "title is invalid").isString(),
            check("tourName", "tours should be available").isString(),
            check("description", "All details about booking are included").isLength(),
            check("seats", "seats should be number").isNumeric(),
            check("Date", "date should be valid").isDate(),
            check("price", "price should be valid").isNumeric()
        ];





    }


}
export default Validator;
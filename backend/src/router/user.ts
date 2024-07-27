import { json, Router } from "express";

export const userRouter = Router();


userRouter.post("/signup",(req,res)=>{
    const {username , email , password} = req.body; //zod validation for schema

    return res.json({
        msg:"User signup successfully"
    })



});

userRouter.post("/sigin",(req,res)=>{
    const {username , email , password} = req.body; //zod validation for schema

    return res.json({
        msg:"User sigin successfully"
    })

    
});

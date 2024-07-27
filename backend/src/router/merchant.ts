import { PrismaClient } from "@prisma/client";
import { json, Router } from "express";

const prisma = new PrismaClient();

export const merchantRouter = Router();


merchantRouter.post("/signup",async(req,res)=>{
    const {username , email , password} = req.body; //zod validation for schema
    try {
        const merchant = await prisma.merchant.findFirst({
            where:{
                email
            }
        })
        if(merchant){
            return res.status(403).json({
                "msg":"Merchant exist already"
            });
        }
        await prisma.merchant.create({
            data:{
                name:username,
                email:email,
                password:password,

            }
        })
    } catch (err) {
        console.log(err)
    }

    return res.json({
        msg:"merchant signup successfully"
    })
});

merchantRouter.post("/sigin",async(req,res)=>{
    const {email, password} = req.body; //zod validation for schema
    try {
        const merchant = await prisma.merchant.findFirst({
            where:{
                email
            }
        })
        if(!merchant){
            return res.status(403).json({
                "msg":"Merchant does not exist"
            });
        }
        
    } catch (err) {
        console.log(err)
    }

    return res.json({
        msg:"merchant signup successfully"
    })

    return res.json({
        msg:"User sigin successfully"
    })    
});

import { Request,Response } from "express";
import Category from "../../models/Category";
import Attribute from "../../models/Attribute";

class CategoryController{

    async index(req:Request,res:Response){
        try{
            let catData = await Category.find({parent_id:null});
            return res.send(catData)
        }catch(err){
            console.log(err);
        }
    }

    async create(req:Request,res:Response){
        try{
            let att = req.body.category;
            att.map(async(name:any)=>{
                 new Attribute({name:name}).save();
            });
            
            // let catData = new Category({...req.body});
            // catData = await catData.save();
            // return res.send(catData)

        }catch(err){
            console.log(err);
        }
    }

    

}


export default CategoryController;
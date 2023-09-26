import { Request,Response } from "express";
import Category from "../../models/Category";
import Attribute from "../../models/Attribute";



class CategoryController{

    async getAllCategories() {
        try {
            const categories = await Category.find({parent_id: null}).lean();

            async function getChildItems(parentId: any): Promise<any> {
                const children = await Category.find({parent_id: parentId}).lean();
                return Promise.all(
                    children.map(async child => ({
                        ...child,
                        children: await getChildItems(child._id),
                    }))
                );
            }

            const categoriesWithChildren = await Promise.all(
                categories.map(async cat => ({
                    ...cat,
                    children: await getChildItems(cat._id),
                }))
            );
            return categoriesWithChildren;
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw error;
        }
    }


    constructor(){
        this.index = this.index.bind(this);
    }
    

    async index(req:Request,res:Response){
        try{
            const categories = await this.getAllCategories();
            res.status(200).json(categories);
        }catch(err){
            console.log(err);
        }
    }

    async create(req:Request,res:Response){
        try{
            
            let catData = new Category({...req.body});
            catData = await catData.save();
            return res.send(catData)

        }catch(err){
            console.log(err);
        }
    }

    

}


export default CategoryController;
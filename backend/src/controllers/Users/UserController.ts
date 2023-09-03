import {Request,Response} from 'express';
import userControllerInterface from './UserControllerInterface';
import User from '../../models/User';
import DataResponse from '../../lib/DataResponse';

class UserController implements userControllerInterface {
    
    async index(req:Request,res:Response){
        const users = await User.find({});
        res.json(DataResponse(users,200,'Users List',true));
    }
   async create(req:Request,res:Response){
    try{
        let findEmail = await User.find({email:req.body.email});
        if(findEmail){
            res.json(DataResponse({},400,'User Already Exists',true));
        }else{
        let user = new User(req.body);
        await user.save();
        res.json(DataResponse(user,200,'User Created'));
        }
    }catch(e:any){
        res.json(DataResponse({},400,e,true));
    }
        
    }

    update(req:Request,res:Response):void{
        res.send('Hello World');
    }

    delete(req:Request,res:Response):void{
        res.send('Hello World');
    }
   
}

export default  UserController;
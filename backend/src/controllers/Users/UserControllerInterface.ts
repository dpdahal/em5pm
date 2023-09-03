import {Request,Response} from 'express';

interface UserControllerInterface{
    index(req:Request,res:Response):void;
    create(req:Request,res:Response):void;
    update(req:Request,res:Response):void;
    delete(req:Request,res:Response):void;
}

export default UserControllerInterface;
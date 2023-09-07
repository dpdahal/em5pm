import express from 'express';
import CategoryController from '../controllers/Category/CategoryController';

let catRouter = express.Router();
let catInstance = new CategoryController();
catRouter.get('/',catInstance.index);
catRouter.post('/',catInstance.create);


export default catRouter;
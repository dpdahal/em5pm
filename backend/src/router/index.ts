import express from 'express';
import userRouter from './user';
import catRouter from './category';

let router = express.Router();

router.use('/user',userRouter);
router.use('/category',catRouter);


export default router;
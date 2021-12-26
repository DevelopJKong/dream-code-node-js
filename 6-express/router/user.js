import express from 'express';

const userRouter= express.Router();

userRouter.get('/',(req,res)=>{
    res.status(201).send('GET: /users');
});

export default userRouter;

import express from 'express';

const userRouter = express.Router();

userRouter.use('/' , (req,res) =>{
  res.status(201).send("ok from user router")
});

export default userRouter;

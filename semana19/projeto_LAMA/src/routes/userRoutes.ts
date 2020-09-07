import express from 'express';
import signUp from '../controller/signUp';
import login from '../controller/login';

export const userRouter = express.Router();

userRouter.post('/signup', signUp);
userRouter.post('/login', login);
import express from 'express';
import signUp from '../controller/signUp';

export const userRouter = express.Router();

userRouter.post('/signup', signUp);
import express from 'express';
import registerBand from '../controller/registerBand'

export const bandsRouter = express.Router();

bandsRouter.post('/registerband', registerBand)
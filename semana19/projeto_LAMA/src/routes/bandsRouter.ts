import express from 'express';
import registerBand from '../controller/registerBand'
import bandDetails from '../controller/bandDetails';

export const bandsRouter = express.Router();

bandsRouter.post('/registerband', registerBand)
bandsRouter.post('/bandDetails', bandDetails);
import express from 'express';

export const bandsRouter = express.Router();

bandsRouter.post('/registerband', registerband)
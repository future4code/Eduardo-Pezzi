import express from 'express';
import { AddressInfo } from "net";
import { userRouter } from './routes/userRoutes';
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
	if (server) {
		const address = server.address() as AddressInfo;
		console.log(`Servidor sendo executado em http://localhost:${address.port}`);
	} else {
		console.error(`Falha ao iniciar servidor.`);
	}
});

app.use('/user', userRouter);
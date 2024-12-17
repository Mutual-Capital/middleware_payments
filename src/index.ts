import dotenv from "dotenv";
import express from "express";
import routes_hopy from "./hopy_pay/routes/routes";
import { routesApiPix } from "./crm_coins/routes/routes";
import { middlewareErrors } from "./middlewares/errors/middleware_erros";
import { prisma } from "../prisma/db/PrismaClient";

const app = express();

dotenv.config();
app.use(express.json())
app.use(routes_hopy);
app.use(routesApiPix);

app.get('/', (req, res) => {
    const logs = prisma.logs.findMany();

    console.log('LOGS');
    console.log(logs);

    res.send({logs});
});

app.use(middlewareErrors);

app.listen(process.env.APP_PORT || 3000, () => {
    console.log(`rodando na porta ${process.env.APP_PORT ?? 3000}`);
})
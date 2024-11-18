import { Router } from "express";
import { receive_payment_hopy_pay } from "../controller/HopyPayController";

const routes = Router();

routes.post('/api/v1/webhook_hopy', receive_payment_hopy_pay);

export default routes;
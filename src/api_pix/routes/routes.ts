import { Router } from "express";
import { updatedStatusPaymentApiPix } from "../controller/ApiPixController";

const routesApiPix = Router();

routesApiPix.post('/api/v1/webhook', updatedStatusPaymentApiPix);

export {
    routesApiPix
};

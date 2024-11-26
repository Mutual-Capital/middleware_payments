import axios from "axios";
import { Request } from "express";
import { prisma } from "../../../prisma/db/PrismaClient";
import { updateStatusPaymentHopyPay } from "../../hopy_pay/controller/HopyPayController";
import { logForPaymentCreationApiPix, logForPaymentCreationHopyPay } from "../../model/Logs/Logs";
import { CustomError, NotFoundError } from "../../middlewares/errors/Errors";

async function createPaymentCrmCoins(req: Request, hopy_id_payment: number) {
    console.log('======== Dentro da função de criação de pagamento clone ========');
    const id = Math.random().toString(36).replace('.', '');
    await axios.post(`${process.env.PIX_API_URL}/script/pixapi.prg/createpix`,
        {
            "partner": process.env.PARTNER,
            "id": id,
            "valor": parseFloat((req.body.data.amount / 100).toString()).toFixed(2),
            "img": "S",
            "nome": req.body.data.customer.name,
            "cpf": req.body.data.customer.document.number,
            "imgtype": "png",
            "webhook": `${process.env.APP_URL_NGROK}/api/v1/webhook`,
            "mudavalor": "false",
            "dinamico": "false",
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then(async (res) => {
        console.log(res.data);
        await logForPaymentCreationHopyPay('Payment Created', 'Aguardando Pagamento', 200, String(hopy_id_payment), id);
        await logForPaymentCreationApiPix('Payment Created', 'Aguardando Pagamento', 200, String(hopy_id_payment), id);
        return res.data
    })
    .catch(async (error) => {
        console.log(error);
        await logForPaymentCreationHopyPay('Error', 'Erro ao criar o pagamento', 400, String(hopy_id_payment), id);
        await logForPaymentCreationApiPix('Error', 'Erro ao criar o pagamento', 400, String(hopy_id_payment), id);
    });
}

async function updatedStatusPaymentApiPix(req: Request) {
    console.log("======== Dentro da função updatedStatusPaymentApiPix ========");
    console.log(req.body);
    
    const payment = await prisma.logs.findFirst({
        where: {
            apiPix_id_payment: req.body.transactionid
        }
    });

    if(payment == null) {
        throw new NotFoundError('Pagamento não encontrado.');
    }

    if(payment.payment_status == "Pago") {
        throw new CustomError('Pagamento já pago.', 200, new Date().toLocaleString('pt-br'));
    }

    console.log(payment);
    
    await updateStatusPaymentHopyPay(payment);
}

export {
    createPaymentCrmCoins,
    updatedStatusPaymentApiPix
};


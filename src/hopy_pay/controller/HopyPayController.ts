import axios from "axios";
import { Request, Response } from "express";
import { createPaymentCrmCoins } from "../../crm_coins/controller/ApiPixController";
import { updateLogForPaymentApiPix, updateLogForPaymentHopyPay } from "../../model/Logs/Logs";
import { randomUUID } from "crypto";

async function receive_payment_hopy_pay(req: Request, res: Response) {
    console.log(req.body);
    await createClonePyamentCrmCoins(req);
    // if(req.body.data.paymentMethod == "pix") {
    //     await createClonePyamentAPIPIX(req);
    //     return;
    // }
}

async function createClonePyamentCrmCoins(req: any) {
    await createPaymentCrmCoins(req, req.body.data.id);
}

async function updateStatusPaymentHopyPay(hopy_payment: any) {
    console.log("======== Dentro da função updateStatusPaymentHopyPay ========");
    await axios.post(`${process.env.HOPY_URL}/v1/hooks/transactions/custom/${hopy_payment.hopy_id_payment}`,
        {
            id: randomUUID(),
            status: "paid",
        },
        {
            headers: {
                'application-id': randomUUID(),
                'webhook-secret': randomUUID(),
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: process.env.AUTHORIZATION_TOKEN_HOPY_PAY
            }
        }
    )
    .then(async (res) => {
        console.log('### Resposta da requisição do método updateStatusPaymentHopyPay ###');
        console.log(res.data);
        await updateLogForPaymentHopyPay(String(hopy_payment.hopy_id_payment));
        await updateLogForPaymentApiPix(hopy_payment.apiPix_id_payment);
        console.log(" REGISTRO DE PAGAMENTO APÓS ATUALIZAÇÃO \n " + hopy_payment);
    });
}

export {
    receive_payment_hopy_pay,
    updateStatusPaymentHopyPay
};


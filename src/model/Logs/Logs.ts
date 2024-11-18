import { prisma } from "../../../prisma/db/PrismaClient";

async function logForPaymentCreationHopyPay(response: string, payment_status: string, statusCode: number, hopy_id_payment: string, apiPix_id_payment: string) {
    await prisma.logs.create({
        data: {
            apiName: "hopy_pay",
            endpoint: "/api/v1/webhook_hopy",
            response,
            payment_status,
            statusCode,
            createdAt: new Date(),
            hopy_id_payment,
            apiPix_id_payment
        }
    });
}

async function logForPaymentCreationApiPix(response: string, payment_status: string, statusCode: number, hopy_id_payment: string, apiPix_id_payment: string) {
    await prisma.logs.create({
        data: {
            apiName: "https://www.crmcoins.com.br",
            endpoint: "/script/pixapi.prg/createpix",
            response,
            payment_status,
            statusCode,
            createdAt: new Date(),
            hopy_id_payment,
            apiPix_id_payment
        }
    });
}

async function updateLogForPaymentHopyPay(hopy_id_payment: string) {
    const payment_hopy_pay = await prisma.logs.findFirst({
        where: {
            hopy_id_payment
        }
    });

    await prisma.logs.update({
        where: {
            id: payment_hopy_pay?.id,
            apiName: "hopy_pay"
        },
        data: {
            payment_status: "Pago",
            response: "Status Updated"
        }
    });
}

async function updateLogForPaymentApiPix(apiPix_id_payment: string) {
    const payment_api_pix = await prisma.logs.findFirst({
        where: {
            apiPix_id_payment,
            apiName: "https://www.crmcoins.com.br"
        }
    });

    await prisma.logs.update({
        where: {
            id: payment_api_pix?.id
        },
        data: {
            payment_status: "Pago",
            response: "Status Updated"
        }
    });
}

export {
    logForPaymentCreationHopyPay,
    logForPaymentCreationApiPix,
    updateLogForPaymentHopyPay,
    updateLogForPaymentApiPix
}
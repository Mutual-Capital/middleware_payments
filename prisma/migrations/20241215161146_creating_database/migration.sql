-- CreateTable
CREATE TABLE "Logs" (
    "id" SERIAL NOT NULL,
    "apiName" TEXT NOT NULL,
    "endpoint" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "payment_status" TEXT NOT NULL,
    "hopy_id_payment" TEXT NOT NULL,
    "apiPix_id_payment" TEXT NOT NULL,
    "statusCode" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Logs_hopy_id_payment_key" ON "Logs"("hopy_id_payment");

-- CreateIndex
CREATE UNIQUE INDEX "Logs_apiPix_id_payment_key" ON "Logs"("apiPix_id_payment");

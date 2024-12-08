-- CreateEnum
CREATE TYPE "AccidentTypeEnum" AS ENUM ('Accident', 'RoadRepair', 'MassEvent', 'VehicleAnomaly', 'CitizenRequest', 'SignalFailure', 'Other');

-- CreateEnum
CREATE TYPE "AccidentStatusEnum" AS ENUM ('active', 'resolved', 'pending');

-- CreateTable
CREATE TABLE "Accident" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "type" "AccidentTypeEnum" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "location" JSONB,
    "severity" INTEGER NOT NULL,
    "timestamp" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "AccidentStatusEnum" NOT NULL,
    "imageUrl" TEXT,

    CONSTRAINT "Accident_pkey" PRIMARY KEY ("id")
);

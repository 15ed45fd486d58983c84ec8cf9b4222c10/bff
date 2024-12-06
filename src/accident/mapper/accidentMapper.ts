import { Accident } from "../entities/accident.entity";
import { Accident as PrismaAccident } from "@prisma/client";

export const accidentMapper = (accident: PrismaAccident): Accident => {
return {
    ...accident,
    location: location && {
        longitude: Number(location['longitude']),
        latitude: Number(location['latitude'])
    }
}
}
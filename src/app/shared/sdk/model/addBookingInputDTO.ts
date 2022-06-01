/**
 * FunnySail API
 * Api para administración y venta de servicios, actividades y embarcaciones.
 *
 * The version of the OpenAPI document: v1
 * Contact: 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AddBoatBookingInputDTO } from './addBoatBookingInputDTO';


export interface AddBookingInputDTO { 
    clientId?: string | null;
    totalPeople: number;
    requestCaptain?: boolean;
    boats?: Array<AddBoatBookingInputDTO> | null;
    serviceIds?: Array<number> | null;
    activityIds?: Array<number> | null;
}


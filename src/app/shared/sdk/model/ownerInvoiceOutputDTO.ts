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
import { OwnerInvoiceLinesOutputDTO } from './ownerInvoiceLinesOutputDTO';
import { TechnicalServiceBoatOutputDTO } from './technicalServiceBoatOutputDTO';
import { UserOutputDTO } from './userOutputDTO';


export interface OwnerInvoiceOutputDTO { 
    id?: number;
    ownerId?: string | null;
    toCollet?: boolean;
    amount?: number;
    isPaid?: boolean;
    isCanceled?: boolean;
    date?: string;
    owner?: UserOutputDTO;
    ownerInvoiceLines?: Array<OwnerInvoiceLinesOutputDTO> | null;
    technicalServiceBoats?: Array<TechnicalServiceBoatOutputDTO> | null;
}

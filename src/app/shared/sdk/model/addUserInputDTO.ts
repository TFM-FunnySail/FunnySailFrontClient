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


export interface AddUserInputDTO { 
    email: string;
    firstName: string;
    lastName?: string | null;
    password: string;
    confirmPassword?: string | null;
    receivePromotion?: boolean | null;
    birthDay?: string | null;
    phoneNumber?: string | null;
    returnUrl?: string | null;
}


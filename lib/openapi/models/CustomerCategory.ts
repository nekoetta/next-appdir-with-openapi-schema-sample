/* tslint:disable */
/* eslint-disable */
/**
 * rust_api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CustomerCategory
 */
export interface CustomerCategory {
    /**
     * 
     * @type {number}
     * @memberof CustomerCategory
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof CustomerCategory
     */
    name: string;
}

/**
 * Check if a given object implements the CustomerCategory interface.
 */
export function instanceOfCustomerCategory(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function CustomerCategoryFromJSON(json: any): CustomerCategory {
    return CustomerCategoryFromJSONTyped(json, false);
}

export function CustomerCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerCategory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function CustomerCategoryToJSON(value?: CustomerCategory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}

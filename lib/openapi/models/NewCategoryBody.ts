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
 * @interface NewCategoryBody
 */
export interface NewCategoryBody {
    /**
     * 
     * @type {string}
     * @memberof NewCategoryBody
     */
    name: string;
}

/**
 * Check if a given object implements the NewCategoryBody interface.
 */
export function instanceOfNewCategoryBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function NewCategoryBodyFromJSON(json: any): NewCategoryBody {
    return NewCategoryBodyFromJSONTyped(json, false);
}

export function NewCategoryBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewCategoryBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function NewCategoryBodyToJSON(value?: NewCategoryBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}


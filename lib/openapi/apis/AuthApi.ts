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


import * as runtime from '../runtime';
import type {
  LoginInfo,
} from '../models';
import {
    LoginInfoFromJSON,
    LoginInfoToJSON,
} from '../models';

export interface LoginRequest {
    loginInfo: LoginInfo;
}

/**
 * AuthApi - interface
 * 
 * @export
 * @interface AuthApiInterface
 */
export interface AuthApiInterface {
    /**
     * 
     * @param {LoginInfo} loginInfo 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    loginRaw(requestParameters: LoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     */
    login(requestParameters: LoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class AuthApi extends runtime.BaseAPI implements AuthApiInterface {

    /**
     */
    async loginRaw(requestParameters: LoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.loginInfo === null || requestParameters.loginInfo === undefined) {
            throw new runtime.RequiredError('loginInfo','Required parameter requestParameters.loginInfo was null or undefined when calling login.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginInfoToJSON(requestParameters.loginInfo),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async login(requestParameters: LoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.loginRaw(requestParameters, initOverrides);
    }

}

import {host} from "../config";
import {MaybeNil} from "./types";


export const http = <T = any>(api: string, input: RequestInfo = host, init?: RequestInit): Promise<TResponse<T>> => {
    return fetch(`${input}${api}`, init).then(res => res.json());
};


export interface IRequesetConfig {
    method: string;
    host: string;
    data?: any;
    header: Headers
}

type TResponse<T> = IFailedResponse<T> | ISuccessResponse<T>

export interface IFailedResponse<T> {
    success: false;
    data: MaybeNil<T>
}


export interface ISuccessResponse<T> {
    success: true;
    data: T
}

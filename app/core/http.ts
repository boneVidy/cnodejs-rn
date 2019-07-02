import {host} from "../config";
import {MaybeNil} from "./types";


export const http = <T = any>(api: string, input: RequestInfo = host, init?: RequestInit): Promise<IResponse<T>> => {
    return fetch(`${input}${api}`, init).then(res => res.json());
};


export interface IRequesetConfig {
    method: string;
    host: string;
    data?: any;
    header: Headers
}

export interface IResponse<T> {
    success: boolean;
    data: MaybeNil<T>
}


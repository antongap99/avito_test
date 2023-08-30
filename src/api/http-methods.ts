import { AxiosRequestConfig } from "axios";

import axios from "axios";
import { IHeaders, IQueryParams, IhttpResponse } from "./http-interfaces";


export const getRequest = async (
    url: string,
    queryParams: IQueryParams = {},
    headers: IHeaders<string> = {},
): Promise<IhttpResponse> => {

    const config: AxiosRequestConfig = {
        url: url,
        method: 'get',
        headers: headers,
        params: new URLSearchParams(queryParams),
        withCredentials: true
    };
    const response = await axios(config);
    if (response === undefined) {
        throw new Error("api's error")
    }
    return { status: response.status, body: response.data } as IhttpResponse;
}
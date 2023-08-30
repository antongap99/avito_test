export interface IhttpResponse {
    readonly status: number,
    readonly body: { [key: string]: unknown; }
}

export interface IHeaders<T> {
    [key: string]: T
}

export interface IQueryParams {
     [key: string]: string;
}
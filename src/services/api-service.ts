import axios, { AxiosInstance } from "axios";

export type KeyValue<T, U> = {
  key: T;
  value: U;
};

export interface ApiServiceOptions {
  baseUrl: string;
  timeout?: number;
  headers?: KeyValue<string, string>[];
}

export class ApiService {
  protected _headers: string[][] = [];
  protected _http: AxiosInstance;

  constructor(options: ApiServiceOptions) {
    const { baseUrl, timeout = 5000, headers } = options;
    this._http = axios.create({
      baseURL: baseUrl,
      timeout: timeout,
      headers: headers?.reduce((acc, current) => {
        return { ...acc, [current.key]: current.value };
      }, {}),
    });
  }

  get headers(): string[][] {
    return this._headers;
  }

  public setHeaders(headers: KeyValue<string, string>[]): ApiService {
    for (const i in headers) {
      if (
        headers[i].hasOwnProperty("key") &&
        headers[i].hasOwnProperty("value")
      ) {
        this._headers.push([headers[i].key, headers[i].value]);
      }
    }
    return this;
  }

  public resetHeaders(): void {
    this._headers = [];
  }
}

export class RequestBody<T> {
  constructor(private _requestBody: T) {}

  get requestBody(): T {
    return this._requestBody;
  }

  set requestBody(newRequestBody: T) {
    this._requestBody = newRequestBody;
  }
}

export default ApiService;

import { CampaignPage, ICampaign, ICampaignDto } from "@model/campaigns";
import ApiService, { ApiServiceOptions, KeyValue } from "./api-service";
import { PageRequest } from "@model/common";
import { InternalAxiosRequestConfig } from "axios";

export type CampaignServiceOptions = ApiServiceOptions & {
  accessToken?: string;
  sessionId?: string;
};

export class CampaignService extends ApiService {
  constructor(options: CampaignServiceOptions) {
    const { sessionId } = options;
    let headers: KeyValue<string, string>[] | undefined;

    if (sessionId) {
      headers = [{ key: "X-SESSION-ID", value: sessionId }];
    }

    super({ headers, ...options });

    const useBearerToken = (config: InternalAxiosRequestConfig) => {
      options.accessToken && config.headers.setAuthorization(options.accessToken);
      return config;
    };

    this._http.interceptors.request.use(useBearerToken);
  }
  getCampaignsPage = (data: PageRequest): Promise<CampaignPage> => {
    const { filter, page = 0, size = 30, sort } = data;
    return this._http
      .get("/campaigns", {
        params: {
          filter,
          page,
          size,
          sort,
        },
      })
      .then((res) => res.data);
  };

  findCampaign = (id: string): Promise<ICampaign> => {
    return this._http.get(`/campaigns/${id}`).then((res) => res.data);
  };
}

import { AxiosAdapter } from "@/adapters/axiosAdapter/axiosAdapter";

export default class BaseRepository {
  apiClient: AxiosAdapter;
  endpoint: string;

  constructor(apiClient: AxiosAdapter, endpoint: string) {
    this.apiClient = apiClient;
    this.endpoint = endpoint;
  }
}

import BaseRepository from "./BaseRepository";
import axiosAdapter from "@/adapters/axiosAdapter/axiosAdapter";

class UserRepository extends BaseRepository {
  constructor() {
    super(axiosAdapter, "/users");
  }
  async getAll() {
    return this.apiClient.httpPost({ url: `${this.endpoint}/find`, body: {} });
  }
  async login(body: { password: string, email: string }) {
    return this.apiClient.httpPost({ url: `${this.endpoint}/login`, body: body });
  }
  async getLoggedUser() {
    return this.apiClient.httpPost({ url: `${this.endpoint}/logged-user`, body: {} });
  }
}
export const userRepository = new UserRepository();

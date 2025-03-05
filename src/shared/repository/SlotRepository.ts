import BaseRepository from "./BaseRepository";
import axiosAdapter from "@/adapters/axiosAdapter/axiosAdapter";

class SlotRepository extends BaseRepository {
  constructor() {
    super(axiosAdapter, "/bookings");
  }
  async getAll () {
    return this.apiClient.httpPost({ url: `${this.endpoint}/find-bookings-info`, body: {} });
}
}
export const slotRepository = new SlotRepository();


import BaseRepository from "./BaseRepository";
import axiosAdapter from "@/adapters/axiosAdapter/axiosAdapter";
import { IReservationSave, ReservationDelete } from "@/pages/Dashboard/domain/Reservation.entity";

class ReservationRepository extends BaseRepository {
  constructor() {
    super(axiosAdapter, "/reservations");
  }
  async getAll() {
    return this.apiClient.httpPost({ url: `${this.endpoint}/find`, body: {} });
  }
  async makeSlotReservation(reservationSave: IReservationSave) {
    return this.apiClient.httpPost({ url: `${this.endpoint}/saveone`, body: reservationSave });
  }
  async quitSlotReservation(reservationDelete: ReservationDelete) {
    return this.apiClient.httpPost({ url: `${this.endpoint}/quit-reservation`, body: reservationDelete});
  }
}
export const reservationRepository = new ReservationRepository();


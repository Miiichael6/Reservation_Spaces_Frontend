// import { IReservedHoursDto } from "../../domain/Reservation.entity";
// import { IBooking } from "../../domain/Slot.entity";

import { IUser } from "@/pages/Dashboard/domain/User.entity"

export interface iAdministrationState extends Record<string, unknown> {
  users: IUser[]
}
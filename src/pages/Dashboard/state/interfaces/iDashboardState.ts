import { IReservedHoursDto } from "../../domain/Reservation.entity";
import { IBooking } from "../../domain/Slot.entity";

export interface iDashboardState extends Record<string, unknown> {
  hours_reserved: IReservedHoursDto[]
  slots: IBooking[]
}
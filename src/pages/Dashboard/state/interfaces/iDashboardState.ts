import { IReservedHoursDto } from "../../domain/Reservation.entity";

export interface iDashboardState extends Record<string, unknown> {
  hours_reserved: IReservedHoursDto[]
}
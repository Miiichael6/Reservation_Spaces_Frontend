import { IUser } from "./User.entity";
import { IBooking } from "./Slot.entity";

export class IReservedHoursDto {
  hour_start: number = 0;
  hour_end: number = 0;
}

export class IReservationSave {
  reservation:IReservation = new IReservation();
  booking_id: number = 0;
}

export class ReservationDelete {
    reservation_id: number = 0;
}


export class IReservation {
  id: number = 0;
  reserved_hour: IReservedHoursDto = new IReservedHoursDto();
  user?: IUser;
  booking?: IBooking;
  created_at: Date = new Date();
}

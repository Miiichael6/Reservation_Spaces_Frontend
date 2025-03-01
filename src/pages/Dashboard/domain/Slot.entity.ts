import { IReservation } from "./Reservation.entity";

export enum Status {
    FINISHED = "FINISHED",
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

export interface IBooking {
    id: number;
    coach: string;
    hour_start: number;
    hour_end: number;
    status: Status;
    reservation: IReservation[];
}

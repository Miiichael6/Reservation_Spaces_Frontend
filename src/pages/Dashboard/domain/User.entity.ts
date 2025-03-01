import { IReservation } from "./Reservation.entity";

export interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
    name: string;
    lastname: string;
    role: string[];
    user_picture: string;
    reservations?: IReservation[];
  }
  
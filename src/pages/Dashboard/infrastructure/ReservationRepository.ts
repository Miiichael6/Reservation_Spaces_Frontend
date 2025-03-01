import useHttp from "@/adapters/axiosAdapter/axiosAdapter"
import { IReservationSave, ReservationDelete } from "../domain/Reservation.entity";

function getReservationRepository () {
    const { httpPost } = useHttp()
    const makeSlotReservation = async ( reservationSave: IReservationSave) => {
        const slots = await httpPost({ url: "/reservations/saveone" , body: reservationSave})
        return slots;
    }

    const quitSlotReservation = async ( reservationDelete: ReservationDelete) => {
        const slots = await httpPost({ url: "/reservations/quit-reservation" , body: reservationDelete})
        return slots;
    }

    return {
        makeSlotReservation,
        quitSlotReservation
    }
}

export const ReservationRepository = getReservationRepository()
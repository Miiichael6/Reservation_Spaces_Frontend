import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { IBooking } from "../../domain/Slot.entity";
import {
  IReservation,
  IReservationSave,
} from "../../domain/Reservation.entity";
import { ReservationRepository } from "../ReservationRepository";
import { AxiosError } from "axios";
import { SlotRepository } from "../SlotRepository";
import { useAppSelector } from "@/hooks/redux-toolkit";
interface SlotItemProps {
  slot: IBooking;
  allSlots?: IBooking[];
  setSlots: (item: IBooking[]) => void;
}

const SlotItem = ({ slot, setSlots }: SlotItemProps) => {
  const { user } = useAppSelector((state) => state.Auth);
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => setExpanded(!expanded);

  const handleQuitSlotReservation = async (selectedSlot: IBooking) => {
    try {
      console.log(selectedSlot);
      const reservated = selectedSlot.reservation.find(res => res.user?.id === user?.id)
      if(!reservated) throw new Error("user didn't make a reservation in this slot");
  
      await ReservationRepository.quitSlotReservation({ reservation_id: reservated.id })
      const slotsRes = await SlotRepository.getAll();
      setSlots(slotsRes);
    } catch (error) {
      if (error instanceof AxiosError) return console.log(error.response?.data);
      console.log(error);
    }
  };

  const handleMakeSlotReservation = async (selectedSlot: IBooking) => {
    try {
      const reservationSave = new IReservationSave();
      reservationSave.booking_id = selectedSlot.id;
      reservationSave.reservation.reserved_hour.hour_start =
        selectedSlot.hour_start;
      reservationSave.reservation.reserved_hour.hour_end =
        selectedSlot.hour_end;

      await ReservationRepository.makeSlotReservation(reservationSave);
      const slotsRes = await SlotRepository.getAll();
      setSlots(slotsRes);
    } catch (error) {
      if (error instanceof AxiosError) return console.log(error.response?.data);
      console.log(error);
    }
  };

  return (
    <Card
      sx={{
        bgcolor: "#323232",
        borderRadius: 2,
        boxShadow: 3,
        marginBottom: 1,
        cursor: "pointer",
        transition: "0.3s",
      }}
      onClick={handleToggle}
    >
      <Box
        sx={{
          color: "white",
          p: 1.5,
          borderRadius: "8px 8px 0 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
      <Typography variant="h6">
        <b>from</b> {slot.hour_start}:00 <b>to</b> {slot.hour_end}:00
      </Typography>
      </Box>
      <Collapse in={expanded} timeout="auto">
        <CardContent
          sx={{ padding: 0.5, paddingLeft: 2, paddingBottom: 0.1 , cursor: "default" }}
          onClick={(event) => event.stopPropagation()}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" , padding: 0.5,}}>
            <Typography sx={{color: "white"}} variant="subtitle1">reserved by:</Typography>
            <Typography sx={{color: "white"}} variant="subtitle1">
              {slot.reservation.map((i) => i.user).length} / 5
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              p: 0.5,
              bgcolor: "#f5f5f5",
              borderRadius: 2,
            }}
          >
            {slot.reservation.length ? (
              slot.reservation.map((reservation: IReservation, i: number) => (
                <Tooltip key={i} title={reservation.user?.username}>
                  <CardMedia
                    key={i}
                    sx={{
                      borderRadius: 100,
                      height: 30,
                      width: 30,
                      objectFit: "cover",
                      marginLeft: !i ? 0 : 1 * -1
                    }}
                    component="img"
                    src={reservation.user?.user_picture ? reservation.user?.user_picture : reservation.user?.username}
                    alt={reservation.user?.username}
                  />
                </Tooltip>
              ))
            ) : (
              <Typography variant="body1" sx={{ padding: 0.5 }}>
                any revervation yet
              </Typography>
            )}
          </Box>
          {slot.reservation.find((i) => i.user?.email === user?.email) ? (
            <Button
              variant="contained"
              color="error"
              sx={{ mt: 2, borderRadius: 5, textTransform: "none" }}
              onClick={() => handleQuitSlotReservation(slot)}
            >
              quit reservation
            </Button>
          ) : (
            <Button
              variant="contained"
              color="success"
              sx={{ mt: 2, borderRadius: 5, textTransform: "none" }}
              onClick={() => handleMakeSlotReservation(slot)}
            >
              Make a reservation
            </Button>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default SlotItem;

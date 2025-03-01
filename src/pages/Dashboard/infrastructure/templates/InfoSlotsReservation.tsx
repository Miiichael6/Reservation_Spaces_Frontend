import { useEffect, useState } from "react";
import { SlotRepository } from "../SlotRepository";
import { IBooking } from "../../domain/Slot.entity";
import { Box, Card, CardContent } from "@mui/material";
import { IReservedHoursDto } from "../../domain/Reservation.entity";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import { DashboardActions } from "@/store/slices/Dashboard";
import SlotItem from "./SlotItem";

function InfoSlotsReservation() {
  const { user } = useAppSelector(state => state.Auth)
  const dispatch = useAppDispatch()
  const [slots, setSlots] = useState<IBooking[]>([]);

  useEffect(() => {
    const fillSlotsReservation = async () => {
      const slotsRes = await SlotRepository.getAll();
      setSlots(slotsRes);
      console.log(slotsRes);
    };
    fillSlotsReservation();
  }, []);

  useEffect(() => {
    const userSlotsReservated = slots.reduce((result: IReservedHoursDto[], item) => {
      const slotReservated = item.reservation.find(res => res.user?.id === user?.id)
      if(!slotReservated) return result;
      const reservated = new IReservedHoursDto()
      reservated.hour_start = item.hour_start
      reservated.hour_end = item.hour_end
      result.push(reservated)
      return result;
    }, [])
    dispatch(DashboardActions.setState({ hours_reserved: userSlotsReservated }))
  }, [slots, user, dispatch])

  return (
    <Card sx={{ 
      bgcolor: "#0A0A0A",
      borderRadius: 2,
      boxShadow: 3,
      maxHeight: "95vh",
      display: "flex",
      flexDirection: "column",
      margin: 0.5,
      marginTop: 2
    }}>
      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <Box sx={{ flex: 1, overflowY: "auto", p: 0.1, paddingRight: 0.5 }}>
          {slots.map((slot: IBooking, i: number) => (<SlotItem key={i} slot={slot} allSlots={slots} setSlots={setSlots}/>))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default InfoSlotsReservation;

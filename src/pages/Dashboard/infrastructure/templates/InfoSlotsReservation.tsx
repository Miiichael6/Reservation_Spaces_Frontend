import { useEffect } from "react";
import { slotRepository } from "@/shared/repository";
import { IBooking } from "../../domain/Slot.entity";
import { Box, Card, CardContent } from "@mui/material";
import { IReservedHoursDto } from "../../domain/Reservation.entity";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import { DashboardActions } from "@/store/slices/Dashboard";
import SlotItem from "./SlotItem";
import CustomShimmerLoader from "@/components/CustomShimmerLoader";
function InfoSlotsReservation() {
  const { user } = useAppSelector(state => state.Auth)
  const { slots } = useAppSelector(state => state.Dashboard)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fillSlotsReservation = async () => {
      const slotsRes = await slotRepository.getAll();
      dispatch(DashboardActions.setState({ slots: slotsRes }))
    };
    fillSlotsReservation();
  }, [dispatch]);

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
    <Box sx={{ flexDirection: "column", top: 1 }}>
      <Card sx={{ bgcolor: "#10172A", height: "98vh",borderRadius: 2, boxShadow: 3, display: "flex", flexDirection: "column", marginX: 1.5 }}>
        <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <Box sx={{ flex: 1, overflowY: "auto" }}>
          <CustomShimmerLoader loading={!slots.length} quantity={20}>
            {slots.map((slot: IBooking, i: number) => (<SlotItem key={i} slot={slot}/>))}
          </CustomShimmerLoader>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default InfoSlotsReservation;

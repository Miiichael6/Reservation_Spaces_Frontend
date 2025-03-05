import DrawerPage from "@/components/DrawerPage";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import { AuthActions } from "@/store/slices/Auth";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

function InfoUserCard() {
  const { user } = useAppSelector((state) => state.Auth);
  const { hours_reserved } = useAppSelector((state) => state.Dashboard);
  const dispatch = useAppDispatch();
  const logOutAccount = () => {
    if (user) {
      localStorage.removeItem("token")
      dispatch(AuthActions.setState({ user: null }));
    }
  };

  return (
      <Box sx={{ display: "flex", height: "100vh", bgcolor: "#1F2937", gap: 1, flexDirection: "row",justifyContent: "center", alignItems: "center", }}>
        <Box>
          <Card sx={{ 
            height: "98vh", 
            width: "100%", 
            maxWidth: "300px",
            bgcolor: "#10172A", 
            color: "#CBD5E1" ,
            marginLeft: 1,
            borderRadius: 2 
          }}>
            <CardContent sx={{ height: "100%", paddingBottom: "10px !important", position: "relative" }}>
            <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
              <CardMedia
                sx={{ borderRadius: 25, height: 100, width: 100, objectFit: "cover" }}
                component="img"
                src={user?.user_picture ? user?.user_picture : user?.username}
                alt={user?.username}
              />
            </Box>
            <Typography variant="h5" component="div" className="text-center py-1">Hi, {user?.name}</Typography>
            <Typography variant="subtitle1" className="text-center">{user?.email}</Typography>
          

            <DrawerPage user={user} />
            <Box sx={{ position: "absolute", bottom: 15}}>
              <Box>
                <Button 
                  onClick={logOutAccount} 
                  variant="contained" 
                  size="small" 
                  color="error" 
                  sx={{ textTransform: "none" }}>
                  Log Out
                </Button>
              </Box>
            </Box>
             <Typography variant="subtitle2" className="pt-2">
               You have {hours_reserved.length} reservation
               {hours_reserved.length === 1 ? "" : "s"}:
             </Typography>
             {hours_reserved.map((item, index: number) => (
               <Box key={index}>
                 <Typography variant="subtitle1" color="initial" className="!text-[#CBD5E1]">
                   {item.hour_start}:00 - {item.hour_end}:00
                 </Typography>
               </Box>
             ))}
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Outlet />
        </Box>
      </Box>
  );
}

export default InfoUserCard;

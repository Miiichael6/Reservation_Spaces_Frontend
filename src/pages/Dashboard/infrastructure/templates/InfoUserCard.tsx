import { useAppSelector } from "@/hooks/redux-toolkit";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

function InfoUserCard() {
  const { user } = useAppSelector((state) => state.Auth);
  const { hours_reserved } = useAppSelector((state) => state.Dashboard);
  return (
    <>
      <Card
        sx={{
          height: "100%",
          bgcolor: "lightblue",
          width: "100%",
          margin: 1,
          marginRight: 0,
          marginTop: 2,
          overflow: "auto",
        }}
      >
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
            <CardMedia
              sx={{
                borderRadius: 100,
                height: 100,
                width: 100,
                objectFit: "cover",
              }}
              component="img"
              src={user?.user_picture ? user?.user_picture : user?.username}
              alt={user?.username}
            />
          </Box>
          <Typography variant="h5" component="div">
            Hi, {user?.name} {user?.lastname}
          </Typography>
          <Typography variant="subtitle1">{user?.email}</Typography>
          <Typography variant="subtitle2">
            You have {hours_reserved.length} reservation
            {hours_reserved.length === 1 ? "" : "s"}:
          </Typography>
          {hours_reserved.map((item, index: number) => (
            <Box key={index}>
              <Typography variant="subtitle1" color="initial">
                {item.hour_start}:00 - {item.hour_end}:00
              </Typography>
            </Box>
          ))}
        </CardContent>
      </Card>
    </>
  );
}

export default InfoUserCard;

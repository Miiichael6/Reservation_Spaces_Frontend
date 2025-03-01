import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import { AuthActions } from "@/store/slices/Auth";
import { Box, Button } from "@mui/material";

function HomeHeader() {
  const { user, token } = useAppSelector((state) => state.Auth);
  const dispatch = useAppDispatch();
  const logOutAccount = () => {
    if (user || token) dispatch(AuthActions.setState({ token: "", user: null }));
  };
  return (
    <Box sx={{
      height: "100%",
      maxHeight: "90%",
      borderRadius: 1,
      bgcolor: "lightblue",
      width: "100%",
      margin: 1,
      marginRight: 0,
      marginTop: 2,
      overflow: "auto",
    }}>
      <Button onClick={logOutAccount} variant="contained" color="warning">
        log out
      </Button>
    </Box>
  );
}

export default HomeHeader;

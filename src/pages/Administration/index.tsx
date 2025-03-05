import { Link } from "react-router-dom";
import "./infrastructure/css/index.css";
import UserList from "./infrastructure/templates/UserList";
import { Box } from "@mui/material";

export const AdministrationScreen = () => {
  return (
    <Box>
      <UserList />
      <Link to={"/"}>Volver al home</Link>
    </Box>
  );
};

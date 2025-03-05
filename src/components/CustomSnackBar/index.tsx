import React, { useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

export interface CustomSnackBarProps {
  isOpen?: boolean,
  type: "error" | "info" | "success" | "warning",
  message?: string,
}
const CustomSnackBar = ({ isOpen = false, type = "success", message = "" }: CustomSnackBarProps) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen)
  },[isOpen])

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <>
      <Snackbar 
        open={open} 
        autoHideDuration={3000} 
        onClose={handleClose} 
        anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert 
          
          onClose={handleClose} 
          severity={type}
          variant="filled">
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CustomSnackBar;

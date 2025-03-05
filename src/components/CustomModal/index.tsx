import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };


const CustomModal = ({children}: Props) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
            Abrir modal
        </Button>
  
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={style}>
             {children}
            <Button variant="outlined" onClick={() => setOpen(false)}>
              Cerrar
            </Button>
          </Box>
        </Modal>
      </>
    );
};

export default CustomModal;

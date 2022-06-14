import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import tw from 'twin.macro'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface Props {
  open: boolean,
  type?: "success" | "error",
  setOpen: React.SetStateAction<boolean>,
  message: string,
}
function Hint({ open, setOpen, message, type = "success" }: Props) {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (

    <Snackbar
      tw="z-50 w-6/12"
      open={open}
      autoHideDuration={10000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      {
        <Alert onClose={handleClose} severity={type} sx={{ width: '50%' }}>
          {message}
        </Alert>
      }
    </Snackbar>


  )
}

export default Hint
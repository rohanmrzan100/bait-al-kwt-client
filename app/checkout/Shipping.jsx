"use client";
import React, { useState } from "react";
import { useUser } from "../hooks/useUser";
import Button from "../components/Button/Button";
import { useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Shipping = () => {
  const router = useRouter();
  const { name } = useUser();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [address, setAddress] = useState(null);
  function handleAddLocation() {}
  return (
    <>
      <div className="bg-white p-4 mt-8 rounded-lg shadow-lg">
        {!address ? (
          <>
            <Button
              label=" + Add New Delivery Address"
              outline
              custom="text-teal-800 text-center w-full font-bold cursor-pointer"
              onClick={() => {
                handleOpen();
              }}
            />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Modal>
          </>
        ) : (
          <div>Deliver to : {name}</div>
        )}
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg my-8">Here</div>
    </>
  );
};

export default Shipping;

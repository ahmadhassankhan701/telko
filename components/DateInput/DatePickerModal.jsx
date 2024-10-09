import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";
import moment from "moment";

const DatePickerModal = ({ open, setOpen, date, setDate }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 500,
    bgcolor: "#fff",
    border: "none",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
    overflow: "auto",
  };
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            orientation="portrait"
            value={date || dayjs("2024-08-17")}
            onChange={(newValue) => setDate(newValue)}
            disablePast={true}
            onAccept={(value) => {
              setDate(value);
              setOpen(false);
            }}
            onError={() => {
              setOpen(false);
            }}
          />
        </LocalizationProvider>
      </Box>
    </Modal>
  );
};

export default DatePickerModal;

import React from "react";
import { TextField } from "@mui/material";

const InputField = ({ title = "", value, handleChange }) => {
  return (
    <TextField
      fullWidth
      placeholder={title}
      variant="outlined"
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      sx={{
        mt: 1,
        "& input::placeholder": {
          color: "#000000",
          fontSize: 20,
          fontFamily: "Poppins",
          fontWeight: "400",
          wordWrap: "break-word",
        },
        ".MuiInputBase-input": {
          color: "black",
          fontSize: 20,
          fontFamily: "Poppins",
          fontWeight: "400",
          wordWrap: "break-word",
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          "& fieldset": {
            borderColor: "#E0E0E0",
          },
          "&:hover fieldset": {
            borderColor: "#BDBDBD",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#45B6FF",
          },
        },
      }}
    />
  );
};

export default InputField;

// pages/index.js
import { TextField, Button, Box } from "@mui/material";
import { styled } from "@mui/material";

const CustomButton = styled(Button)({
  backgroundColor: "red",
  color: "white",
  fontWeight: "bold",
  borderRadius: "35px",
  padding: "10px 20px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "darkred",
  },
});

export default function ProductAvailabilitty() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", sm: "row" },
        padding: "10px 15px",
        width: { xs: "95%", sm: "60%", md: "50%" },
        backgroundColor: "#f7f7f7",
        borderRadius: "35px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Text Field for Address Input */}
      <TextField
        label=""
        placeholder="Enter your address"
        variant="standard"
        sx={{
          ".MuiInputBase-input": {
            color: "#908E8E",
            fontSize: 16,
            fontWeight: "600",
            wordWrap: "break-word",
          },
          flex: 1,
          marginLeft: "10px",
          marginRight: "10px",
        }}
        InputProps={{
          disableUnderline: true, // <== added this
        }}
      />

      {/* Check Availability Button */}
      <CustomButton>Check Availability</CustomButton>
    </Box>
  );
}

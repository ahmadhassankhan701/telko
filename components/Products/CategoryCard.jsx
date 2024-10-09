import { Box, Typography } from "@mui/material";
import React from "react";

const CategoryCard = () => {
  return (
    <Box
      sx={{
        bgcolor: "#EFEEEE",
        borderRadius: "25px",
        width: "334px",
        height: "334px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <img src="/categ1.png" />
      <Typography>Fibre Internet</Typography>
    </Box>
  );
};

export default CategoryCard;

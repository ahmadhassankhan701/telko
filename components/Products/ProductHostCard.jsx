import { ArrowDownward, ArrowUpward, CheckCircle } from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";

const ProductHostCard = () => {
  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        borderRadius: "25px",
        flexDirection: "column",
        gap: 10,
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        width: "340px",
        padding: 2,
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 2,
          gap: 2,
        }}
      >
        <Typography fontSize={"20px"} fontWeight={"600"}>
          R469pm
        </Typography>
      </Box>
      <Divider sx={{ my: 3 }} />
      <Box display={"flex"} flexDirection={"column"}>
        <Box mt={3}>
          <Button
            variant="text"
            startIcon={<CheckCircle />}
            sx={{
              textTransform: "none",
              color: "#000000",
              fontSize: "16px",
            }}
          >
            Free-to-use Fibre router
          </Button>
          <Button
            variant="text"
            startIcon={<CheckCircle />}
            sx={{
              textTransform: "none",
              color: "#000000",
              fontSize: "16px",
            }}
          >
            Free installation
          </Button>
          <Button
            variant="text"
            startIcon={<CheckCircle />}
            sx={{
              textTransform: "none",
              color: "#000000",
              fontSize: "16px",
            }}
          >
            Free connection fee
          </Button>
          <Button
            variant="text"
            startIcon={<CheckCircle />}
            sx={{
              textTransform: "none",
              color: "#000000",
              fontSize: "16px",
            }}
          >
            Free connection fee
          </Button>
        </Box>
        <Button
          sx={{
            fontSize: "15px",
            color: "#ffffff",
            bgcolor: "#FF0000",
            borderRadius: "30px",
            ml: 2,
            my: 2,
            width: "215px",
            height: "50px",
            alignSelf: "center",
            textTransform: "none",
            "&:hover": {
              color: "#ffffff",
              bgcolor: "#FF0000",
            },
          }}
          variant="contained"
        >
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductHostCard;

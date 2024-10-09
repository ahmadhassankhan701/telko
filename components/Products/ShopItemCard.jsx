import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
const services = ["5G", "4G", "LTE-A", "WIFI", "WAN"];
const ShopItemCard = () => {
  return (
    <Box
      boxShadow={
        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      }
      width={"340px"}
    >
      <Box
        bgcolor={"#ffffff"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <img src="/modem.png" width={190} height={170} />
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "700",
            color: "#000000",
            width: "220px",
            textAlign: "center",
            my: 5,
          }}
        >
          ZTE 5G CPE MC888D WiFi 6 Router ZTE 5G MC888D
        </Typography>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        bgcolor={"#EFEEEE"}
        py={1}
        px={2}
      >
        {services.map((item, index) => (
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "700",
              color: "#FF0000",
            }}
            key={index}
          >
            {item}
          </Typography>
        ))}
      </Box>
      <Divider
        sx={{
          bgcolor: "#ffffff",
          border: "3px solid #ffffff",
        }}
      />
      <Box bgcolor={"#EFEEEE"} py={2} px={2}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#000000",
            }}
          >
            R4499
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: 16,
              fontWeight: 700,
              lineHeight: 1,
              color: "#000000",
              display: "inline-block",
              writingMode: "vertical-lr",
              transform: "rotate(180deg)",
              textAlign: "center",
            }}
          >
            <span
              style={{
                width: 2,
                height: 32,
                marginBottom: 5,
                display: "inline-block",
                background: "#000000",
              }}
            ></span>
            or
            <span
              style={{
                width: 2,
                height: 32,
                marginTop: 5,
                display: "inline-block",
                background: "#000000",
              }}
            ></span>
          </Typography>
          <Box>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                color: "#000000",
                width: "120px",
              }}
            >
              R225 p/m x24m on Credit Card*{" "}
            </Typography>
            <Box mt={1}>
              <img src="/pay1.png" />
              <img src="/pay2.png" />
            </Box>
          </Box>
        </Box>
        <Button
          variant="outlined"
          fullWidth
          sx={{ border: "2px solid #000000", mb: 1, mt: 2, color: "#000000" }}
        >
          view
        </Button>
        <Button
          variant="contained"
          fullWidth
          sx={{ bgcolor: "#FF0000", color: "#ffffff" }}
        >
          add to cart
        </Button>
      </Box>
    </Box>
  );
};

export default ShopItemCard;
